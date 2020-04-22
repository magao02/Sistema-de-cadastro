const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(express.json());

require('./controllers/authcontroller')(app);
require('./controllers/projectcontroller')(app);




app.listen(3000);