'use strict';

//creamos una función para usarla como un constructor de objetos
function Fruta() {
	this.nombre = 'limon';

	this.saluda = () => {
		console.log('Hola, soy ', this.nombre)
	}
}

//crear un objeto con ese constructor

const limon = new Fruta();

console.log(limon)
limon.saluda()

