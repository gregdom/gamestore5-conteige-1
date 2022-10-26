import { Router } from "express";
import ProfileController from "../controllers/ProfileController.js";
import isAuthenticated from "../../../shared/http/middlewares/isAuthenticated.js";
import isAuthorization from "../models/middlewares/isAuthorization.js";
import isProfileValidationRoutes from "../routes/middlewares/isProfileValidationRoute.js";
import { celebrate, Segments, errors } from "celebrate";

const profileRouter = Router();
const profileControllerInit = new ProfileController();

profileRouter.use(isAuthenticated);
profileRouter.use(isAuthorization);

profileRouter.post(
  "/marketplaces",
  // celebrate({ [Segments.BODY]: isProfileValidationRoutes.createMarketplace }),
  profileControllerInit.createmarket
);

profileRouter.get("/marketplaces", profileControllerInit.readmarket);

/***********************************************************************/

profileRouter.get("/", profileControllerInit.read);

profileRouter.put(
  "/edit",
  celebrate({ [Segments.BODY]: isProfileValidationRoutes.profileRouterSchema }),
  profileControllerInit.update
);

profileRouter.delete("/delete", profileControllerInit.delete);

profileRouter.get("/cart", profileControllerInit.readProfileCart);

profileRouter.post("/cart/pay", profileControllerInit.createProfileCart);


// profileRouter.post("/cart", profileControllerInit.createProfileCart);

profileRouter.use(errors());

export default profileRouter;
