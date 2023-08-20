import express from "express";
import create from "../controllers/activities/create.js"
import read from "../controllers/activities/read.js";
import readOne from "../controllers/activities/readOne.js";
import update from "../controllers/activities/update.js";
import destroy from "../controllers/activities/destroy.js";

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
router.put('/:a_id', update)

//Destroy
router.delete('/:id', destroy)


export default router;
