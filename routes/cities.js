import express from "express";
import create from "../controllers/cities/create.js"
import read from "../controllers/cities/read.js";
import readOne from "../controllers/cities/readOne.js";
import update from "../controllers/cities/update.js";
import destroy from "../controllers/cities/destroy.js";
import carousel from "../controllers/cities/carousel.js";

let router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//Create
router.post('/', create);

//Read
router.get('/', read);
//ReadOne
router.get('/carousel', carousel)
router.get('/:id', readOne); //Endpoints con params al final para q no detecten palabras como params

//Update
router.put('/:c_id', update)

//Destroy
router.delete('/:id', destroy)


export default router;
