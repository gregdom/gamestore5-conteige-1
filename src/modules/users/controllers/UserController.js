import CreateUserService from "../services/CreateUserService.js";

class UserController {
  
  /*************** CRIAR CONTA DE USUÁRIO ***************/

  async create(req, res) {
    const { name, email, password, cpf } = req.body;
    const service = new CreateUserService();
    const user = await service.execute(name, email, password, cpf);

    user === null
      ? res.render("./store/pages/register.ejs", {
          err: "Não é possível usar este email!",
        })
      : res.render("./store/pages/register.ejs");
  }

  async read(req, res){
    res.render("./store/pages/register.ejs");
  }
}

export default UserController;
