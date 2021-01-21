'use strict';

//console.log('Refranes')

//función que escribe un texto en la consola tras 2 segundos
function escribeTras2Segundos(texto, instruccionesParaDespues) {
	setTimeout(() => {
		console.log(texto);
		instruccionesParaDespues();
	}, 2000)
}

escribeTras2Segundos('Texto1', function () {
	escribeTras2Segundos('Texto2', function () {
		console.log('Termino')
	});
})









