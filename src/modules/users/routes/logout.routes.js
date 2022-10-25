import { Router } from "express";
import isAuthenticated from "../../../shared/http/middlewares/isAuthenticated.js";

const logoutRouter = Router();

logoutRouter.use(isAuthenticated);

logoutRouter.get("/", (req, res) => {
  res.clearCookie("jwt");
  console.log("Você saiu da conta!");
  res.redirect("https://fangames.space/login");
});

export default logoutRouter;
