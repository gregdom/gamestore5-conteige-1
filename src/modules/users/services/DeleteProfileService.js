import { query } from "../../../config/db/SnipetConn.js";
import UserQueryModel from "../models/findqueries/UserQueryModel.js";

class DeleteProfileService {
  async execute(_iduser) {
    const userQueryModelInit = new UserQueryModel();
    const user = await userQueryModelInit.findById(_iduser);

    if (!user) {
      return "Essa conta não existe!";
    }

    console.log(user.iduser, parseInt(_iduser));

    if (user && user.iduser !== parseInt(_iduser)) {
      return "Você não pode excluir a conta!";
    }

    await query(`DELETE FROM users WHERE iduser = ${_iduser} LIMIT 1`);

    return "Conta excluída!";
  }
}

export default DeleteProfileService;
