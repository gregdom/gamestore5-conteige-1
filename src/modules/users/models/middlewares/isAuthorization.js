import { query } from "../../../../config/db/SnipetConn.js";

async function isAuthorization(req, res, next) {

	const userid = req.user.id;
	const userReturn = await query(`SELECT id_level FROM users WHERE iduser = ${userid}`);
	const user_ = userReturn[0];

	if (user_.id_level >= 3) {
		return res.json("Você não tem permissão para acessar a página!");
	}

	return next();
}

export default isAuthorization;
