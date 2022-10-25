import { query } from "../../../config/db/SnipetConn.js";
import UserQueryModel from "../models/findqueries/UserQueryModel.js";
import UserTokenModel from "../models/findqueries/UserTokenModel.js";
import { isAfter, addHours } from "date-fns";
import crypting from "bcryptjs";
const { hash } = crypting;

class ResetPasswordService {
  async execute(token, password) {
    const userTokenModelInit = new UserTokenModel();
    const tokenReturn = await userTokenModelInit.findByToken(token);

    if (!tokenReturn) {
      return "User token não existe!";
    }

    const id_user_token = tokenReturn.id_user;
    const userQueryModelInit = new UserQueryModel();
    const user = await userQueryModelInit.findById(id_user_token);

    console.log(user);

    if (!user) {
      return "Usuário não existe!";
    }

    const tokenCreatedAt = tokenReturn.createdAt;
    const compareDate = addHours(tokenCreatedAt, 2);
    if (isAfter(Date.now(), compareDate)) {
      return "Token expirado!";
    }

    const hashPassword = await hash(password, 8);
    const iduser_ = user.iduser;

    await query(
      `UPDATE users SET password = '${hashPassword}' WHERE iduser = '${iduser_}';`
    );
  }
}

export default ResetPasswordService;
