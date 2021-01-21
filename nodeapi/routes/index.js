var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET /parametroenruta/* */
router.get('/parametroenruta/:dato', (req, res, next) => {
  const dato = req.params.dato;
  console.log(req.params)
  res.send('He recibido el dato: ' + dato)
})

/* GET /parametrofiltrado/* */
router.get('/parametrofiltrado/:dato([0-9]+)', (req, res, next) => {
  const dato = req.params.dato;
  console.log(req.params)
  res.send('He recibido el dato numerico: ' + dato)
})

/* GET /parametroopcional/* */
router.get('/parametropcional/:dato?', (req, res, next) => {
  const dato = req.params.dato;
  console.log(req.params)
  res.send('He recibido el dato: ' + dato)
})

/* GET /parametros multiples/* */
//http://localhost:3000/parametros/55/piso/4/puerta/A
router.get('/parametros/:dato/piso/:piso/puerta/:puerta', (req, res, next) => {
  const dato = req.params.dato;
  console.log(req.params)
  res.send('He recibido el dato: ' + dato)
})

/* GET /parametros en la query */
//http://localhost:3000/querystring/?dato=3400
//http://localhost:3000/querystring/?dato=3400&otrodato=azul
router.get('/querystring/', (req, res, next) => {
  const dato = req.query.dato;
  console.log(req.query)
  res.send('He recibido el dato: ' + dato)
})

/* POST /parametros en la query */
router.post('/enelbody', (req, res, next) => {
  console.log(req.body)
  console.log('Cabecera', req.get('Content-type'))
  res.send('He recibido el dato en el body: ' + req.body.numero)
})
module.exports = router;
