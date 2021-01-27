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


async function main() {
	const promesa = Sleep(2000)

	console.log(promesa)
	const resultado = await promesa
	console.log(resultado)
}


main()