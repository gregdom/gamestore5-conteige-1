import { query } from "../../../../config/db/SnipetConn.js";

class UserQueryModel {

  /********************* PROCURA USUÁRIO PELO ID *********************/

  async findById(id) {
    const user = await query(`SELECT * FROM users WHERE iduser = ${id};`);
    return user[0];
  }

  /******************* PROCURA USUÁRIO PELO EMAIL ********************/

  async findByEmail(email) {
    const user = await query(`SELECT * FROM users WHERE email = '${email}';`);
    return user[0];
  }
}

export default UserQueryModel;
