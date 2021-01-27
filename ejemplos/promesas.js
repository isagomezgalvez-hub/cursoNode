'use strict'
// funcion que devuelve una promesa
function Sleep(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(() => { resolve(67) }, ms);
	});
}

function otroSleep(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (false) {
				return reject(new Error('Es el fin del mundo'));
			}
			else {
				resolve(86)
			}
		}, ms);
	});
}


// consumir la promesa

const promesa = Sleep(2000)

console.log(promesa)

promesa.then((resultado) => {
	console.log('La promesa se ha resuelto con resultado: ', resultado)
	return otroSleep(3000)
}).then((resultado) => {
	console.log('Han pasado 3 segundos y vuelvo a responder: ', resultado)
	return Sleep(2000)
}).then(() => {
	console.log('Han vuelto a pasar 3 segundos y ya he terminado de responder ')
}).catch(err => {
	console.log('Ha ocurrido un error', err)
})


