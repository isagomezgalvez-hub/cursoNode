
var express = require('express');
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

module.exports = router;
