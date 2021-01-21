'use strict';

function Persona(nombre) {
	this.nombre = nombre;
	/* this.saluda = function () {
		console.log('Soy', this.nombre);
	} */
}

const pablo = new Persona('Pablo')
Persona.prototype.saluda = function () {
	console.log('Soy', this.nombre);
}

pablo.saluda();

// Herencia de persona -------------------------

function Agente(nombre) {
	// heredar el constructor de persona
	// llamar a Persona con mi this
	Persona.call(this, nombre);
}

// heredar propiedades y métodos 
//El prototipo de los agentes sea una Persona

Agente.prototype = Object.create(Persona.prototype)
Agente.prototype.constructor = Agente

const smith = new Agente('Smith')

smith.saluda();

// Herencia Multiple -------------------------

function SuperHeroe() {
	this.vuela = function () {
		console.log(this.nombre, 'estoy volando')
	}
}

// Copiar todas las propiedades de SuperHéroe al prototipo del agente

Object.assign(Agente.prototype, new SuperHeroe());

smith.vuela();