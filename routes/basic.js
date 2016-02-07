module.exports = function(app) {
	var generalController = app.controllers.basic;
	var mathController = app.controllers.math;
	
	app.get('/', generalController.get.index);
	app.get('/getJson', generalController.get.getJson);
	
	app.get('/multiply', mathController.get.multiply);
	app.get('/divide', mathController.get.divide);
	
	app.post('/Calculate', mathController.post.Calculate);
};