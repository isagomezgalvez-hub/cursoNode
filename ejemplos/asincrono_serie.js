'use strict';

console.log('Empiezo')

//función que escribe un texto en la consola tras 2 segundos
function escribeTras2Segundos(texto, instruccionesParaDespues) {
	setTimeout(() => {
		console.log(texto);
		instruccionesParaDespues();
	}, 2000)
}

function serie(n, fn, callback) {
	if (n == 0) { // si ya he terminado salgo
		callback();
		return;
	}
	n = n - 1
	//fn es escribeTras2Segundos
	fn('texto' + n, function () { // este callback es un "cuando termines haz esto(instrucciones para despues)"
		serie(n, fn, callback);
	})
}

serie(5, escribeTras2Segundos, function () {
	console.log('termino')
});


// bucle asincrono repite escribeTras2Segundos 18 veces