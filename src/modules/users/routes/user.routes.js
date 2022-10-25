import { Router } from "express";
import UserController from "../controllers/UserController.js";
import { celebrate, Joi, Segments, errors } from "celebrate";

const userRouter = Router();
const userControllerInit = new UserController();

userRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      cpf: Joi.string().required(),
    },
  }),
  userControllerInit.create
);

userRouter.get("/", userControllerInit.read);

userRouter.use(errors());

export default userRouter;
