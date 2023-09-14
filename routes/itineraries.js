import express from "express";

import create from "../controllers/Itineraries/create.js";
import read from "../controllers/Itineraries/read.js";
import readOne from "../controllers/Itineraries/readOne.js";
import update from "../controllers/Itineraries/update.js";
import destroy from "../controllers/Itineraries/destroy.js";

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
