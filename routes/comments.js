import { Router } from "express";
import create from "../controllers/comments/create.js";

const commentsRouter = Router();

commentsRouter.post('/', create)

export default commentsRouter;