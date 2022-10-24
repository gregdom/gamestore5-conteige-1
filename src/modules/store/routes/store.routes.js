import { Router } from "express";
import StoreController from "../controllers/StoreController.js";
import isLogged from "../models/middlewares/isLogged.js";
// import MarketController from "../controllers/ProductController.js";
// import isAuthenticated from "../../../shared/http/middlewares/isAuthenticated.js";
// import bodySchema from "./middlewares/isValidationRoutes.js";
// import { celebrate, Joi, Segments, errors } from "celebrate";

const storeRouter = Router();
const storeControllerInit = new StoreController();

// marketRouter.use(isAuthenticated);
storeRouter.use(isLogged);

storeRouter.get("/", storeControllerInit.index); // Página principal

storeRouter.get("/game/:slug", storeControllerInit.readSlug); // Página do produto

storeRouter.get("/cart", storeControllerInit.readCart);

storeRouter.get("/cart/login", storeControllerInit.readCartLogin);
storeRouter.post("/cart/login", storeControllerInit.createCartLogin);

// marketRouter.use(errors());

export default storeRouter;
