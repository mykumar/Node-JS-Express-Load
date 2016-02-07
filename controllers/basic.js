module.exports = function() {
	var Controller = {
		get: {
			index: function(request, response) {
				response.render('index');
			},
			
			getJson: function(request, response) {
				response.setHeader('Content-Type', 'application/json');
    			response.send(JSON.stringify({ a: 1 }));
			}
		},
	};
	return Controller;
};
