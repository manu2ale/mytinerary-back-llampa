#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from '../app.js';
import logger from 'debug';
const debug = logger('mytinerary-back-llampa:server');
import http from 'http';


import { connect } from 'mongoose'; // Metodo para conectarse a la db 

/**
 * Get port from environment and store in Express.
 */

let port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

let server = http.createServer(app);  // Creo un servidor Normalizado con HTTP

//Para que reciba datos complejos desde la url
// server.requestTimeout(express.urlencoded({extended:true}));
//para interpretar los mensajes de tipo JSON
// server.use(express.json());

/**
 * Listen on provided port, on all network interfaces.
 */

let ready = ()=> {
  console.log('Server ready on port '+port); //muestro mensaje en consola servidor listo
  connect(process.env.LINK_DB) //el metodo CONNECT devuelce una PROMESA: trabajar con THEN-CATCH o ASYNC-AWAIT
    .then(()=>console.log('database connected'))
    .catch(err=>console.log(err))
}
server.listen(port,ready); //con metodo listen escucho el puerto para que empiece a funcionar (a levanatarse)

server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
