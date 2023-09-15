import { Router } from "express";
import likeOrDislike from "../controllers/likes/likeOrDislike.js";
import read from "../controllers/likes/read.js";
import isLiked from "../middlewares/isLiked.js";
import passport from "../middlewares/passport.js"
import alreadyLiked from "../controllers/likes/alreadyLiked.js";

const likesRouter = Router();


likesRouter.get('/', read);
likesRouter.post('/alreadyLiked',passport.authenticate("jwt",{ session:false }),
    isLiked, 
    alreadyLiked);

likesRouter.post('/',passport.authenticate("jwt",{ session:false }),
    isLiked, 
    likeOrDislike);


export default likesRouter;