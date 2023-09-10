import express from "express";
import create from "../controllers/users/create.js"
import read from "../controllers/users/read.js";
import readOne from "../controllers/users/readOne.js";
import update from "../controllers/users/update.js";
import destroy from "../controllers/users/destroy.js";

let router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//Create
router.post('/signup', create);

//Read
router.get('/', read);
//ReadOne
router.get('/:id', readOne);

//Update
router.put('/:u_id', update)

//Destroy
router.delete('/:id', destroy)


export default router;


