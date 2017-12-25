const controller = require('../controllers/news_controllers');

module.exports = (app) => {
	app.get('/api', controller.greeting);
}