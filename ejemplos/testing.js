'use strict';

const EventEmitter = require('events');

// creamos emisor de eventos

const emisor = new EventEmitter();
const emisor2 = new EventEmitter();

emisor.on('llamada de telefono', () => {
	console.log('Suena el teléfono')
})
emisor.once('llamada de telefono', () => {
	console.log('Brrr')
})

emisor.emit('llamada de telefono')

emisor2.on('Cagar', () => {
	console.log('Estoy cagando')
})
emisor2.emit('Cagar')