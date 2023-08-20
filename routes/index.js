import express from "express";

//El enrutador principal va a llamar a TODOS los recursos y los va a enrutar

import userRouter from './users.js'
import cityRouter from './cities.js'
import activityRouter from './activities.js'
import itineraryRouter from './itineraries.js'

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});


//Obligo al enrutador Principal a usar las rutas del enrutador del recurso user 
router.use('/users', userRouter);
//ROuter,use acepta como MINIMO 2 parametros para enrutar correctamente
  // 1 la palabra con la que se va a enrutar
  // 2 el enrutador que tengo que conectar

router.use('/cities', cityRouter);

router.use('/activities', activityRouter);
router.use('/itineraries', itineraryRouter);
export default router;
