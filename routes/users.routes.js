import { Router } from "express";
import {createNewUser, getUserByID} from "../src/controllers/usersController.js";
import validateParamsUsers from "../middlewares/validate.params.users.js";
import validateLogin from "../middlewares/validate.login.js";

const router = Router();

router.post('/usuarios', validateParamsUsers, createNewUser)
router.get('/usuarios/:email', validateLogin, getUserByID)

export default router;