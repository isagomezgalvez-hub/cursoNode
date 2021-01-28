
var express = require('express');
const { findOne } = require('../../models/Agente');
var router = express.Router();
const Agente = require('../../models/Agente');

/* GET /api/agentes */
router.get('/', async function (req, res, next) {
	try {
		const resultado = await Agente.find();
		res.json(resultado)
	} catch (err) {
		next(err)
	}
});

/* GET /api/agentes:id
Buscar un agente */

router.get('/:id', async function (req, res, next) {
	try {
		const _id = req.params.id;
		const agente = await Agente.findOne({ _id: _id });

		if (!agente) {
			res.status(404).json({ error: 'not found' });
			return
		}
		res.json({ result: agente });

	} catch (err) {
		next(err)
	}
})

/* POST /api/agentes
Crear un agente  (body) */

router.post('/', async (req, res, next) => {
	try {
		const agenteData = req.body;
		const agente = new Agente(agenteData)

		const agenteCreado = await agente.save();

		res.status(201).json({ agenteCreado });

	} catch (error) {
		next(error)
	}
})

/* PUT /api/agentes/:id (body)
Actualizar un agente */

router.put('/:id', async (req, res, next) => {
	try {
		const _id = req.params.id
		const agenteData = req.body

		const agenteActualizado = await Agente.findOneAndUpdate({ _id: _id }, agenteData,
			{
				new: true,
				useFindAndModify: false
			});
		//usamos {new: true} para que nos devuelva el agente actualizado

		res.json({ result: agenteActualizado })
	} catch (error) {
		next(error);
	}
})

/* DELETE /api/agentes/:id (body)
Elimina un agente */

router.delete('/:id', async (req, res, next) => {
	try {
		const _id = req.params.id
		await Agente.deleteOne({ _id: _id })
		res.json()
	} catch (error) {
		next(error);
	}
})


module.exports = router;
