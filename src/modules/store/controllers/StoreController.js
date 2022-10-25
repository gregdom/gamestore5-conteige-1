import IndexService from "../services/IndexService.js";
import SlugService from "../services/SlugService.js";
import IndexCartService from "../services/IndexCartService.js";
import CreateSessionService from "../services/CreateSessionService.js";

class StoreController {
  async index(req, res) {
    const id = req.user.id;
    console.log("STORE CONTROLLER", id);

    const service = new IndexService();
    const result = await service.index(id);

    result.gallery.forEach(element => {
      const game = element;
      const arr = [];

      for (let i = 0; i < result.galleryimg.length; i++) {
        const media = result.galleryimg[i];
        if (media.gameidprodmedia === game.gameid) {
          arr.push(media);
        }
        game.gamemedia = arr;
      }
    });

    result.options.forEach(element => {
      const game = element;
      const arr = [];

      for (let i = 0; i < result.optionsimg.length; i++) {
        const media = result.optionsimg[i];
        if (media.gameidprodmedia === game.gameid) {
          arr.push(media);
        }
        game.gamemedia = arr;
      }
    });

    return res.render("./store/pages/index.ejs", { data: result });
  }

  async readSlug(req, res) {
    const { slug } = req.params;
    const id = req.user.id;
    console.log("PARAMS", slug, id);
    const service = new SlugService();
    const result = await service.findSlug(id, slug);

    result.product.forEach(element => {
      const game = element;
      const arr = [];

      for (let i = 0; i < result.productimg.length; i++) {
        const media = result.productimg[i];
        if (media.gameidprodmedia === game.gameid) {
          arr.push(media);
        }
        game.gamemedia = arr;
      }
    });

    console.log("AQUIIIIIIIIIIII SLUG", result.product[0]);
    return res.render("./store/pages/product.ejs", { data: result });
  }

  async readCart(req, res) {
    const id = req.user.id;
    const service = new IndexCartService();
    const result = await service.indexCart(id);
    console.log("RESULT", result);
    return res.render("./store/pages/cart.ejs", { data: result });
  }

  async readCartLogin(req, res) {
    res.render("./store/pages/login.ejs");
  }

  async createCartLogin(req, res) {
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
      console.log("DIRETO PARA ADMIM CART");
      return res.redirect("https://fangames.space/admin/cart");
    } else {
      res.cookie("jwt", logged.token, {
        httpOnly: true,
        maxAge: 86400000,
      });
      console.log("DIRETO PARA USER CART");
      return res.redirect("https://fangames.space/profile/cart");
    }
  }
}

export default StoreController;
