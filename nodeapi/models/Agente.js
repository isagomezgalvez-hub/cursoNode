'use strict';

const mongoose = require('mongoose');

// definimos un esquema

const agenteSchema = mongoose.Schema({
	name: String,
	age: Number,
});

//creamos el modelo con el esquema definido

const Agente = mongoose.model("Agente", agenteSchema);

// exportamos el modelo (opcional)

module.exports = Agente;
