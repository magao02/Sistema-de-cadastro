const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/noderest', {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true,
	 });


module.exports = mongoose;