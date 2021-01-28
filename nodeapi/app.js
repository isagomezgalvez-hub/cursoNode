var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

const conectionBD = require('./lib/connectMongoose.js');


// view engine setup
app.set('views', path.join(__dirname, 'views'));

//cambiar la extensión de vistas
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);
app.locals.title = 'NodeAPI'


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//middleware de ficheros estáticos
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

/**
 * Rutas del Api
 */
app.use('/api/agentes', require('./routes/api/agentes'));

/**
 * Rutas del Website
 */


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  if (err.array) { // es un error de validación
    const errorInfo = err.array({ onlyFirstError: true })[0];
    err.message = `Not valid - ${errorInfo.param} ${errorInfo.msg}`;
    err.status = 422;
  }
  res.status(err.status || 500);
  if (isApiRequest(req)) {
    res.json({ error: err.message });
    return;
  }
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.render('error');
});

function isApiRequest(req) {
  return req.originalUrl.indexOf('/api/') === 0;
}

module.exports = app;
