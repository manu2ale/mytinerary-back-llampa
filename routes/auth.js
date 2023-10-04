import { Router } from "express";

import register from "../controllers/auth/register.js";
import signin from "../controllers/auth/signin.js";
import tokenSignIn from "../controllers/auth/tokenSignIn.js";
import signout from "../controllers/auth/signout.js";
import google from "../controllers/auth/google.js";

import registerSchema from "../schemas/register.js";
import signinSchema from "../schemas/signin.js";

import verifyGoogle from "../middlewares/verifyGoogle.js";
import findOrCreate from "../middlewares/findOrCreate.js";
import passport from '../middlewares/passport.js';
import validator from "../middlewares/validator.js";
import existUser from "../middlewares/existUser.js";
import createHash from "../middlewares/createHash.js";
import noExistUser from "../middlewares/noExistUser.js";
import isPassOk from "../middlewares/isPassOk.js";
import isValidToken from "../middlewares/isValidToken.js";

let authRouter = Router();

authRouter.post('/register', validator(registerSchema),
    existUser,
    createHash,
    register);

authRouter.post('/signin', validator(signinSchema),
    noExistUser,
    isPassOk,
    isValidToken,
    signin);

authRouter.post('/token',
    passport.authenticate("jwt", { session: false }),
    isValidToken,
    tokenSignIn);

authRouter.post('/signout',
    passport.authenticate('jwt', { session: false }),
    signout);

authRouter.post('/google',
    verifyGoogle, 
    findOrCreate, 
    isValidToken, 
    google);

export default authRouter;