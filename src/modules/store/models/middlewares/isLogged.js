import toking from "jsonwebtoken";
import authConfig from "../../../../config/auth/Auth.js";
const { verify } = toking;

function isLogged(req, res, next) {
	const authHeader = req.cookies.jwt;

	if (!authHeader) {
		req.user = {
			id: "",
		};
		return next();
	}

	try {
		const token = authHeader;
		const decodedToken = verify(token, authConfig.jwt.secret);
		const sub = decodedToken.sub;
		req.user = {
			id: sub,
		};

		return next();
	} catch (err) {
		return "Houve um erro aqui!"
	}
}

export default isLogged;
