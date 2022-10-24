import SendEmailForgotPasswordService from "../services/SendEmailForgotPasswordService.js";

class ForgotPasswordController {

  /********** CRIAR SOLICITAÇÃO DE RECUPERAÇÃO DE SENHA **********/

  async create(req, res) {
    const { email } = req.body;
    const service = new SendEmailForgotPasswordService();
    const user = await service.execute(email);

    if (user === null) {
      return res.status(400).json("Usuário não existe");
    }
    
    return res.status(204).json("Foi! FORGOT PASSWORD");
  }
}

export default ForgotPasswordController;
