import { Router } from "express";
import storeRouter from "../../../modules/store/routes/store.routes.js";
import sessionRouter from "../../../modules/users/routes/session.routes.js";
import logoutRouter from "../../../modules/users/routes/logout.routes.js";
import userRouter from "../../../modules/users/routes/user.routes.js";
// import passRouter from "../../../modules/users/routes/password.routes.js";
import adminRouter from "../../../modules/admin/routes/admin.routes.js";
import profileRouter from "../../../modules/users/routes/profile.routes.js";
import marketRouter from "../../../modules/products/routes/product.routes.js";
import notificationRouter from "../../../modules/users/routes/notification.routes.js";

const routes = Router();

routes.use("/", storeRouter);
routes.use("/login", sessionRouter);
routes.use("/logout", logoutRouter);
routes.use("/register", userRouter);
// routes.use("/password", passRouter);
routes.use("/admin", adminRouter);
routes.use("/profile", profileRouter);
routes.use("/marketplaces", marketRouter);
routes.use("/notification", notificationRouter);

export default routes;
