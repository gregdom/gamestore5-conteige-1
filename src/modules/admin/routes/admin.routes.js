import { Router } from "express";
import isAuthenticated from "../../../shared/http/middlewares/isAuthenticated.js";
import isAuthorization from "../models/middlewares/isAuthorization.js";
import AdminController from "../controllers/AdminController.js";

const adminRouter = Router();
const adminControllerInit = new AdminController();

// Middleware verifica autenticação
adminRouter.use(isAuthenticated);
adminRouter.use(isAuthorization);

/****************** ROTA DASHBOARD (PRINCIPAL) *****************/
adminRouter.get("/", adminControllerInit.read);
adminRouter.get("/cart", adminControllerInit.readAdminCart);

/******************** ROTAS DE MARKETPLACES ********************/
adminRouter.get("/marketplaces", adminControllerInit.readAllMarket);
adminRouter.delete("/marketplaces/delete/:id", adminControllerInit.deleteMarket);
adminRouter.get("/marketplaces/entries", adminControllerInit.entriesMarket);

/********************** ROTAS DE CLIENTES **********************/
adminRouter.get("/clientes", adminControllerInit.readAllClient);
adminRouter.get("/clientes/delete/:id", adminControllerInit.deleteClient);

export default adminRouter;
