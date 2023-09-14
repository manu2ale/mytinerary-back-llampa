import express from "express";

//El enrutador principal va a llamar a TODOS los recursos y los va a enrutar

import userRouter from './users.js'
import citiesRouter from './cities.js'
import activityRouter from './activities.js'
import itinerariesRouter from './itineraries.js'
import authRouter from "./auth.js";
import commentsRouter from "./comments.js";

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

router.use('/cities', citiesRouter);
router.use('/activities', activityRouter);
router.use('/itineraries', itinerariesRouter);
router.use('/auth',authRouter);
router.use('/comments',commentsRouter)

export default router;
