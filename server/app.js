import express from 'express';
import http from 'http';

var app = express();

app.get('/', (req, res) => {
	res.send("This is the first route");
});

app.listen(3000);
http.createServer(app);