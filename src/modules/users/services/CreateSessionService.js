import authConfig from "../../../config/auth/Auth.js";
import UserQueryModel from "../models/findqueries/UserQueryModel.js";
import crypting from "bcryptjs";
import toking from "jsonwebtoken";

const { compare } = crypting;
const { sign } = toking;

class CreateSessionService {
  async execute(email, password) {
    const userQueryModelInit = new UserQueryModel();
    const user = await userQueryModelInit.findByEmail(email);

    if (!user) {
      return "Informações incorretas! EMAIL";
    }

    const passwordConfirm = await compare(password, user.password);

    if (!passwordConfirm) {
      return "Informações incorretas! SENHA";
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: JSON.stringify(user.iduser),
      expiresIn: authConfig.jwt.expireIn,
    });

    return {
      user,
      token,
    };
  }
}

export default CreateSessionService;
