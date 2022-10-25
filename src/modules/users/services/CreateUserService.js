import { query } from "../../../config/db/SnipetConn.js";
import UserQueryModel from "../models/findqueries/UserQueryModel.js";
import pkg from "bcryptjs";
const { hash } = pkg;

class CreateUserService {
  async execute(name, email, password, cpf) {
    const emailExists = new UserQueryModel();
    const emailReturn = await emailExists.findByEmail(email);

    if (emailReturn) {
      return null;
    }

    const hashPassword = await hash(password, 8);
    const user = await query(
      `INSERT INTO users (iduser, name, email, password, cpf, id_level) VALUES
        (NULL, '${name}', '${email}', '${hashPassword}', '${cpf}', 1);`
    );

    return user;
  }
}

export default CreateUserService;
