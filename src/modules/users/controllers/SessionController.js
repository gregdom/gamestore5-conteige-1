import CreateSessionService from "../services/CreateSessionService.js";

class SessionController {
  
  /**************** CRIAR SESSÃO DE USUÁRIO ****************/

  async create(req, res) {
    const { email, password } = req.body;
    const service = new CreateSessionService();
    const logged = await service.execute(email, password);

    console.log("----------------------------------");
    console.log(logged);
    console.log("----------------------------------");

    if (logged.user.id_level === 3) {
      res.cookie("jwt", logged.token, {
        httpOnly: true,
        maxAge: 86400000,
      });
      console.log("DIRETO PARA ADMIM");
      return res.redirect("https://fangames.space/admin");
    } else {
      res.cookie("jwt", logged.token, {
        httpOnly: true,
        maxAge: 86400000,
      });
      console.log("DIRETO PARA USER");
      return res.redirect("https://fangames.space/profile");
    }
  }

  async read(req, res) {
    res.render("./store/pages/login.ejs");
  }
}

export default SessionController;
