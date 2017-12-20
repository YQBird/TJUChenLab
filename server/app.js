const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/news_routes');
const app = express();

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== 'testing') {
  mongoose.connect('mongodb://localhost/labChen', 
  	{ useMongoClient: true });
}

app.use(bodyParser.json());
routes(app);

// error handler
app.use((err, req, res, next) => {
	res.status(422).send({ error: err.message });
})

module.exports = app;