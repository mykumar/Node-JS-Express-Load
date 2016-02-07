module.exports = function() {
	var Controller = {
		utils: {
			formatResponse: function(result) {
				var accounting = require('accounting');
				var response   = {
					result: 0.0
				};
				
				result = accounting.formatNumber(result, 2, ".", ",");
				response.result = result;
				
				return response;
			},
			
			Calculator: {
				Calculate: function(params) {
					var number1 = parseFloat(params.number1);
					var number2 = parseFloat(params.number2);
					
					var result = Controller.utils.Calculator[params.operation](number1, number2);
					
					return result;
				},
								
				divide: function(number1, number2) {
					return number1 - number2;
				},
				
				multiply: function(number1, number2) {
					return number1 * number2;
				}
			},
			
			validateParameters: function(parametro) {
				if(parametro && parametro !== '') {
					return parseFloat(parametro);
				}
				
				return 0.0;
			},
			
			prepareParams: function(body) {
				var params = {
					number1: 0.0,
					number2: 0.0,
					operation: body.operation
				};
				
				params.number1 = Controller.utils.validateParameters(body.number1);
				params.number2 = Controller.utils.validateParameters(body.number2);
				
				return params;
			}
		},
		
		get: {
			multiply: function(request, response) {
				response.render('multiply');
			},
			
			divide: function(request, response) {
				response.render('divide');
			}
		},
		
		post: {
			Calculate: function(request, response) {
				var params = Controller.utils.prepareParams(request.body);
				var result  = Controller.utils.Calculator.Calculate(params);
				var res   = Controller.utils.formatResponse(result);
				
				response.render(params.operation, res);
			}
		}
	};
	
	return Controller;
};
