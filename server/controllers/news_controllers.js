module.exports = {
	greeting(req, res, next) {
		res.send({ hi: 'Hello User' });
	}
}