import ResetPasswordService from "../services/ResetPasswordService.js";

class ResetPasswordController {

  /********** CRIAR NOVA SENHA COM RESET **********/

  async create(req, res) {
    const { token, password } = req.body;
    const service = new ResetPasswordService();
    await service.execute(token, password);

    return res.json("Foi! RESET PASSWORD");
  }
}

export default ResetPasswordController;
