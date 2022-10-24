import toking from "jsonwebtoken";
import authConfig from "../../../config/auth/Auth.js";
const { verify } = toking;

function isAuthenticated(req, res, next) {
  const authHeader = req.cookies.jwt;
  console.log("AQUI AUTHHEADER", authHeader);
  if (!authHeader) {
    return res.redirect("https://fangames.space:3000/login");
  }

  const token = authHeader;

  try {
    const decodedToken = verify(token, authConfig.jwt.secret);
    const sub = decodedToken.sub;
    console.log("SUUUUUUUUUUB", sub);
    req.user = {
      id: sub,
    };

    return next();
  } catch (err) {
    return "Token inválido!";
  }
}

export default isAuthenticated;
