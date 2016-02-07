var controller = require('../controllers/calculadora.js')();

describe('Calculadora', function() {
	describe('Testa se as operações-núcleo funcionam corretamente.', function() {
		describe('Somar', function() {
			it('Deveria retornar 5 quando for passado 1 e 4.', function() {
				var numero1 = 1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.somar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(5);
			});
			
			it('Deveria retornar -3 quando for passado 1 e -4.', function() {
				var numero1 = 1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.somar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-3);
			});
			
			it('Deveria retornar 3 quando for passado -1 e 4.', function() {
				var numero1 = -1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.somar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(3);
			});
			
			it('Deveria retornar -5 quando for passado -1 e -4.', function() {
				var numero1 = -1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.somar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-5);
			});
		});
		
		describe('Subtrair', function() {
			it('Deveria retornar -3 quando for passado 1 e 4.', function() {
				var numero1 = 1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.subtrair(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-3);
			});
			
			it('Deveria retornar 5 quando for passado 1 e -4.', function() {
				var numero1 = 1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.subtrair(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(5);
			});
			
			it('Deveria retornar -5 quando for passado -1 e 4.', function() {
				var numero1 = -1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.subtrair(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-5);
			});
			
			it('Deveria retornar 3 quando for passado -1 e -4.', function() {
				var numero1 = -1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.subtrair(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(3);
			});
		});
		
		describe('Multiplicar', function() {
			it('Deveria retornar 4 quando for passado 1 e 4.', function() {
				var numero1 = 1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.multiplicar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(4);
			});
			
			it('Deveria retornar -4 quando for passado -1 e 4.', function() {
				var numero1 = -1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.multiplicar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-4);
			});
			
			it('Deveria retornar -4 quando for passado 1 e -4.', function() {
				var numero1 = 1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.multiplicar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-4);
			});
			
			it('Deveria retornar 4 quando for passado -1 e -4.', function() {
				var numero1 = -1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.multiplicar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(4);
			});
		});
		
		describe('Dividir', function() {
			it('Deveria retornar 0.25 quando for passado 1 e 4.', function() {
				var numero1 = 1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.dividir(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(0.25);
			});
			
			it('Deveria retornar -0.25 quando for passado -1 e 4.', function() {
				var numero1 = -1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.dividir(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-0.25);
			});
			
			it('Deveria retornar -0.25 quando for passado 1 e -4.', function() {
				var numero1 = 1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.dividir(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-0.25);
			});
			
			it('Deveria retornar 0.25 quando for passado -1 e -4.', function() {
				var numero1 = -1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.dividir(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(0.25);
			});
		});
	});
	
	describe('Testa se a função calcular funciona.', function() {
		describe('Somar', function() {
			it('Deveria retornar 5 quando somar 1 e 4.', function() {
				var parametros = {
					numero1: 1,
					numero2: 4,
					operacao: 'somar'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(5);
			});
		});
		
		describe('Subtrair', function() {
			it('Deveria retornar -3 quando subtrair 1 de 4.', function() {
				var parametros = {
					numero1: 1,
					numero2: 4,
					operacao: 'subtrair'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-3);
			});
		});
		
		describe('Multiplicar', function() {
			it('Deveria retornar 4 quando multiplicar 1 por 4.', function() {
				var parametros = {
					numero1: 1,
					numero2: 4,
					operacao: 'multiplicar'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(4);
			});
		});
		
		describe('Dividir', function() {
			it('Deveria retornar 0.25 quando dividir 1 por 4.', function() {
				var parametros = {
					numero1: 1,
					numero2: 4,
					operacao: 'dividir'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(0.25);
			});
		});
	});
	
	describe('Testa se as funções utilitárias funcionam.', function() {
		describe('Controller.utils.formatarResposta()', function() {
			it('Deveria retornar 1,56 quando passado 1.55555558.', function() {
				var resultado = 1.55555558;
				var formatado = controller.utils.formatarResposta(resultado);
				
				formatado.should.be.an.Object;
				formatado.should.have.property('resultado');
				formatado.resultado.should.be.equal('1,56');
			});
			
			it('Deveria retornar 0,00 quando passado undefined.', function() {
				var resultado = undefined;
				var formatado = controller.utils.formatarResposta(resultado);
				
				formatado.should.be.an.Object;
				formatado.should.have.property('resultado');
				formatado.resultado.should.be.equal('0,00');
			});
		});
	});
});