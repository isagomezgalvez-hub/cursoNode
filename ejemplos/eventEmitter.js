'use strict';
const EventEmitter = require('events');

// Creamos un emisor de eventos 

const emisor = new EventEmitter();

emisor.on('llamada de telefono', (quien) => {
	if (quien === 'madre') {
		return;
	}
	console.log('Suena el teléfono')
})

emisor.once('llamada de telefono', () => { // Se ejecuta una sola vez
	console.log('Brr brrr')
})

emisor.emit('llamada de telefono', 'madre')
/* emisor.emit('llamada de telefono')
emisor.emit('llamada de telefono')
emisor.emit('llamada de telefono') */

process.on('beforeExit', () => {
	console.log('me salgo')
})