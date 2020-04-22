const express = require('express');
const jwt = require('jsonwebtoken')

const authconfig = require("../config/auth");

const User = require('../models/User');

const router = express.Router();

function generatetoken(params = {}){
	return jwt.sign(params, authconfig.secret, {
		expiresIn: 86400
	})
}

router.post('/register', async (req,res) => {
	try{
		const user = await User.create(req.body);

		return res.send({ user,
		 token: generatetoken({id: user.id}), });

	} catch (err) {
		return res.status(400).send({ error: 'Registration fail'});
	}
});
router.post('/authenticate', async (req, res) => {
	const{ email, password } = req.body;

	const user = await User.findOne({ email }).select('+password');

	if (!user)
		return res.status(400).send({ error : "User not found"});
	
	user.password = undefined;
	const token = jwt.sign({ id: user.id }, authconfig.secret, {
		expiresIn: 86400,
	});


	res.send({ user,
	 token: generatetoken({id: user.id}),});
});
module.exports = app => app.use('/auth', router);