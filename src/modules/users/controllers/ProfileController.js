import MercadoPago from "mercadopago";

import CreateMarketService from "../services/CreateMarketService.js";
import ReadMarketService from "../services/ReadMarketService.js";

import ReadProfileService from "../services/ReadProfileService.js";
import UpdateProfileService from "../services/UpdateProfileService.js";
import DeleteProfileService from "../services/DeleteProfileService.js";
import IndexCartService from "../../store/services/IndexCartService.js";
import ReadCartProductService from "../services/ReadCartProductService.js";
import CreateOrderCart from "../services/CreateOrderCart.js";

class ProfileController {
  /****************** CRIAR MARKETPLACE *****************/
  /* Usuários comuns podem dar entrada como marketplace */

  async createmarket(req, res) {
    const _iduser = req.user.id;
    const { name, cnpj } = req.body;
    const service = new CreateMarketService();
    const market = await service.execute(_iduser, name, cnpj);
    return res.json(market);
  }

  async readmarket(req, res) {
    const id = req.user.id;
    console.log("Opaaaaa", id);
    const service = new ReadMarketService();
    const market = await service.execute(id);
    console.log(market);

    if (market === null) {
      res.render("./users/pages/marketplaces.ejs");
    } else {
      res.redirect("https://fangames.space:3000/marketplaces/products/register");
    }

  }

  /*************** LISTAR USUÁRIO LOGADO ***************/

  async read(req, res) {
    const id = req.user.id;
    const service = new ReadProfileService();
    const user = await service.execute(id);
    console.log("READPROFILE", user);
    res.render("./users/pages/profile.ejs", { data: user });
  }

  async readProfileCart(req, res) {
    const id = req.user.id;
    const service = new IndexCartService();
    const result = await service.indexCart(id);
    console.log("RESULT", result);
    return res.render("./store/pages/cart.ejs", { data: result });
  }

  async createProfileCart(req, res) {
    const iduser = req.user.id;
    const objDetails = req.body.productgame;
    const service = new ReadCartProductService();
    const data = await service.execute(iduser, objDetails);
    console.log(data);
    console.log(data.user.email);

    let uniqueid = "" + Date.now();

    let dados = {
      items: [{
        id: uniqueid,
        title: data.product.name,
        quantity: 1,
        currency_id: "BRL",
        unit_price: parseFloat(data.product.price),
      },
      ],
      payer: {
        email: data.user.email,
      },
      external_reference: uniqueid,
    };

    try {
      let pagamento = await MercadoPago.preferences.create(dados);
      console.log(pagamento);

      const service = new CreateOrderCart();
      const game = { gameid: data.product.idproduct, gameprice: data.product.price };

      await service.save(iduser, uniqueid, game);

      return res.redirect(pagamento.body.init_point);
    } catch (error) {
      return res.send(error.message);
    }

    // return res.json(products);
  }

  /************** ATUALIZAR USUÁRIO LOGADO *************/

  async update(req, res) {
    const _iduser = req.user.id;
    const { objDetails } = req.body;
    const service = new UpdateProfileService();
    const user = await service.execute(_iduser, objDetails);
    return res.json(user);
  }

  /*************** DELETAR USUÁRIO LOGADO **************/

  async delete(req, res) {
    const _iduser = req.user.id;
    const service = new DeleteProfileService();
    const user = await service.execute(_iduser);
    return res.json(user);
  }
}

export default ProfileController;
