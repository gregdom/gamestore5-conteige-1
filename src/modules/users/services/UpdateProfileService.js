import { query } from "../../../config/db/SnipetConn.js";
import UserQueryModel from "../models/findqueries/UserQueryModel.js";
import crypting from "bcryptjs";
const { compare, hash } = crypting;

class UpdateProfileService {
  async execute(_iduser, objDetails) {
    const userQueryModelInit = new UserQueryModel();

    const user = await userQueryModelInit.findById(_iduser);

    if (!user) {
      return "Usuário não encontrado!";
    }

    const emailExists = await userQueryModelInit.findByEmail(objDetails.email);

    if (emailExists && emailExists.iduser !== parseInt(_iduser)) {
      return "Já existe outro usuário com esse email";
    }

    if (!objDetails.password && objDetails.oldpassword) {
      const verifyOldPassword = await compare(
        objDetails.oldpassword,
        user.password
      );

      if (!verifyOldPassword) {
        return "Senha atual não compatível com a registrada nessa conta! 1";
      }

      const hashPassword = await hash(objDetails.oldpassword, 8);

      await query(
        `UPDATE users SET name = '${objDetails.name}', email = '${objDetails.email}', password = '${hashPassword}' WHERE iduser = ${_iduser};`
      );

      return "Seus dados foram atualizados! 1";
    }

    if (objDetails.password && !objDetails.oldpassword) {
      return "Senha atual é necessária!";
    }

    if (objDetails.password && objDetails.oldpassword) {
      const verifyOldPassword = await compare(
        objDetails.oldpassword,
        user.password
      );

      if (!verifyOldPassword) {
        return "Senha atual não compatível com a registrada nessa conta! 2";
      }
    }

    const hashPassword = await hash(objDetails.password, 8);
    await query(
      `UPDATE users SET name = '${objDetails.name}', email = '${objDetails.email}', password = '${hashPassword}' WHERE iduser = ${_iduser};`
    );

    return "Seus dados foram atualizados! 2";
  }
}

export default UpdateProfileService;
