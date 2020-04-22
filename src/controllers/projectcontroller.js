const express = require('express');
const authmiddleware = require('../middlewares/auth')

const router = express.Router();
 

router.use(authmiddleware)

router.get('/', (req, res) => {
	res.send({ ok: true});

})
	module.exports = app => app.use('/projects', router);