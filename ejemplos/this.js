'use strict';

function Coche(ruedas) {
	this.ruedas = ruedas;
	this.cuantasRuedas = function () {
		//busca a la izquierda de la invocacion al método (antes del punto)
		//y lo que haya ahí será el this
		console.log('Tengo', this.ruedas, 'ruedas')
	}
}

const todoterreno = new Coche(4);

setTimeout(todoterreno.cuantasRuedas.bind(todoterreno), 2000)
