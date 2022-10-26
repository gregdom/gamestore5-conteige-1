import toking from "jsonwebtoken";
import authConfig from "../../../config/auth/Auth.js";
const { verify } = toking;

function isAuthenticated(req, res, next) {
  const authHeader = req.cookies.jwt;
  if (!authHeader) {
    return res.redirect("https://fangames.space/login");
  }

  const token = authHeader;

  try {
    const decodedToken = verify(token, authConfig.jwt.secret);
    const sub = decodedToken.sub;
    req.user = {
      id: sub,
    };

    return next();
  } catch (err) {
    return "Token inválido!";
  }
}

export default isAuthenticated;
