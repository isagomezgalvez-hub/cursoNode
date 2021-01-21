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

/* GET /parametros/* */
router.get('/parametros/:dato/piso/:piso/puerta/:puerta', (req, res, next) => {
  const dato = req.params.dato;
  console.log(req.params)
  res.send('He recibido el dato: ' + dato)
})
module.exports = router;
