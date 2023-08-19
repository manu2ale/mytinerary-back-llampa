import express from "express";
import create from "../controllers/cities/create.js"
import read from "../controllers/cities/read.js";
import readOne from "../controllers/cities/readOne.js";
import update from "../controllers/cities/update.js";
import destroy from "../controllers/cities/destroy.js";

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
router.put('/:u_id', update)

//Destroy
router.delete('/:id', destroy)


export default router;
