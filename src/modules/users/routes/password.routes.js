import { Router } from "express";
import ForgotPasswordController from "../controllers/ForgotPasswordController.js";
import ResetPasswordController from "../controllers/ResetPasswordController.js";

const passRouter = Router();
const forgotPasswordControllerInit = new ForgotPasswordController();
const resetPasswordControllerInit = new ResetPasswordController();

passRouter.post("/forgot", forgotPasswordControllerInit.create);
passRouter.post("/reset", resetPasswordControllerInit.create);

export default passRouter;
