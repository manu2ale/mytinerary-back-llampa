import createError from 'http-errors';
import express from 'express'; //provee métodos y propiedades para levantar servidores
import path from 'path'; //para conocer la ubicacion de nuestro Servidor
// import cookieParser from 'cookie-parser';
import logger from 'morgan'; //para registrar cada una de las Peticiones

// import usersRouter from './routes/users.js'; //Solo vamos a configurar las rutas del enrutador del back principal
import indexRouter from './routes/index.js'; //Este enrutador va a llamar a TODOS los otros recursos (cities, itineraries, users)

import 'dotenv/config.js';  //Importo unicamente la configuracion de las variables de entorno
import { __dirname } from './utils.js'; //Importo la configuracion de la ubicacion del Servidor (antes en commonjs venia pre-config)

let app = express(); //Ejecuta el módulo de express: CREA UNA APP DE BACKEND (SERVIDOR)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
// app.use('/users', usersRouter); // usaré el enrutador principal '/api' para todas las demas rutas

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
