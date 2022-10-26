import { Router } from "express";
import NotificationController from "../controllers/NotificationController.js";

const notificationRouter = Router();
const notificationControllerInit = new NotificationController();

notificationRouter.post("/", notificationControllerInit.create);

export default notificationRouter;
