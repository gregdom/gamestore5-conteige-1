import toking from "jsonwebtoken";
import authConfig from "../../../../config/auth/Auth.js";
const { verify } = toking;

function isLogged(req, res, next) {
	const authHeader = req.cookies.jwt;

	if (!authHeader) {
		console.log("HEADER INDEFINIDO", authHeader)
		req.user = {
			id: "",
		};
		return next();
	}

	try {
		console.log("ACHEI UM TOKEN", authHeader);
		const token = authHeader;
		const decodedToken = verify(token, authConfig.jwt.secret);
		const sub = decodedToken.sub;
		console.log("SUUUUUUUUUUB", sub);
		req.user = {
			id: sub,
		};

		return next();
	} catch (err) {
		return "Houve um erro aqui!"
	}
}

export default isLogged;
