import { Router } from "express";
import create from "../controllers/comments.js/create.js";

const commentsRouter = Router();

commentsRouter.post('/', create)

export default commentsRouter;