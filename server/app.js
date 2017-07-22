var express = require('express');
var http = require('http');

var app = express();

app.get('/', function(req, res) {
	res.send('This is the first route');
});

app.listen(3000);
http.createServer(app);