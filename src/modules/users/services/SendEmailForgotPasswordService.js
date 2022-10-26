import UserQueryModel from "../models/findqueries/UserQueryModel.js";
import UserTokenModel from "../models/findqueries/UserTokenModel.js";
import EtherealMail from "../../../config/mail/EtherealMail.js";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class SendEmailForgotPasswordService {
  async execute(email) {
    const userQueryModelInit = new UserQueryModel();
    const user = await userQueryModelInit.findByEmail(email);

    if (!user) {
      return null;
    }

    const tokenInit = new UserTokenModel();
    const token = await tokenInit.generateToken(user.iduser);

    const forgotpasswordtemplate = path.resolve(
      __dirname,
      "..",
      "views",
      "forgotpassword.hbs"
    );

    await EtherealMail.sendMail({
      to: {
        name: user.name,
        email: user.email,
      },
      from: {
        name: "Gamestore",
        email: "noreply-reset@gamestore.com",
      },
      subject: "Gamestore | Recupere a senha da sua conta",
      templateData: {
        file: forgotpasswordtemplate,
        variables: {
          name: user.name,
          link: `https://fangames.space/resetpassword?token=${token}`,
        },
      },
    });
  }
}

export default SendEmailForgotPasswordService;
