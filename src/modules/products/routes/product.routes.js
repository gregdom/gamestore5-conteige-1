import { Router } from "express";
import MarketController from "../controllers/ProductController.js";
import isAuthenticated from "../../../shared/http/middlewares/isAuthenticated.js";
import bodySchema from "./middlewares/isValidationRoutes.js";
import { celebrate, Joi, Segments, errors } from "celebrate";

const marketRouter = Router();
const marketControllerInit = new MarketController();

marketRouter.use(isAuthenticated);

/*************************** CREATE PRODUCT **************************/
// Exibe página de criação
marketRouter.get("/products/register", marketControllerInit.market);

// Executa a criação
marketRouter.post(
  "/products/register",
  celebrate({
    [Segments.BODY]: Joi.object({
      name: Joi.string().required(),
      slug: Joi.string().required(),
      price: Joi.number().required(),
      description: Joi.string().required(),
      release_date: Joi.string().required(),
      typeindex: Joi.string().required(),
      cpumin: Joi.string().required(),
      videocardmin: Joi.string().required(),
      rammemorymin: Joi.string().required(),
      storagemin: Joi.string().required(),
      cpurec: Joi.string().required(),
      videocardrec: Joi.string().required(),
      rammemoryrec: Joi.string().required(),
      storagerec: Joi.string().required(),
      category: Joi.string().required(),
      mediaurl1: Joi.string().required(),
      mediaurl2: Joi.string().required(),
      mediaurl3: Joi.string().required(),
      mediaurl4: Joi.string().required(),
      mediaurl5: Joi.string().required(),
      mediaurl6: Joi.string().required(),
      mediaurl7: Joi.string().required(),
      mediaurl8: Joi.string().required(),
      mediaurl9: Joi.string().required(),
    }),
  }),
  marketControllerInit.create
);

/*********************** LISTA TODOS OS PRODUCTS **********************/
// Exibe página de produtos
marketRouter.get("/products", marketControllerInit.read);

/*************************** UPDATE PRODUCT ***************************/
// Exibe página com form preenchido para edição
marketRouter.get("/products/edit/:id", marketControllerInit.readUpdate);

// Executa a edição
marketRouter.post(
  "/products/update",
  celebrate({
    [Segments.BODY]: Joi.object({
      idprod: Joi.string().required(),
      name: Joi.string().required(),
      slug: Joi.string().required(),
      price: Joi.number().required(),
      description: Joi.required(),
      release_date: Joi.string().required(),
      typeindex: Joi.string().required(),
      cpumin: Joi.string().required(),
      videocardmin: Joi.string().required(),
      rammemorymin: Joi.string().required(),
      storagemin: Joi.string().required(),
      cpurec: Joi.string().required(),
      videocardrec: Joi.string().required(),
      rammemoryrec: Joi.string().required(),
      storagerec: Joi.string().required(),
      category: Joi.string().required(),
      mediaurl1: Joi.string().required(),
      mediaurl2: Joi.string().required(),
      mediaurl3: Joi.string().required(),
      mediaurl4: Joi.string().required(),
      mediaurl5: Joi.string().required(),
      mediaurl6: Joi.string().required(),
      mediaurl7: Joi.string().required(),
      mediaurl8: Joi.string().required(),
      mediaurl9: Joi.string().required(),
    }),
  }),
  marketControllerInit.update
);

/*************************** DELETE PRODUCT ***************************/

marketRouter.get("/products/delete/:id", marketControllerInit.delete);

marketRouter.use(errors());

export default marketRouter;
