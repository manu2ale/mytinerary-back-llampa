import express from "express";
import create from "../controllers/itineraries/create.js"
import read from "../controllers/itineraries/read.js";
import readOne from "../controllers/itineraries/readOne.js";
import update from "../controllers/itineraries/update.js";
import destroy from "../controllers/itineraries/destroy.js";

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
router.get('/:id', readOne);

//Update
router.put('/:i_id', update)

//Destroy
router.delete('/:id', destroy)


export default router;
