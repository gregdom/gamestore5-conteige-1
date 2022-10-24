import ReadAllMarketService from "../services/ReadAllMarketService.js";
import DeleteMarketService from "../services/DeleteMarketService.js";
import EntriesMarketService from "../services/EntriesMarketService.js";
import DashboardAdmService from "../services/DashboardAdmService.js"
import ReadAllClientService from "../services/ReadAllClientService.js";
import DeleteClientService from "../services/DeleteClientService.js";
import IndexCartService from "../../store/services/IndexCartService.js";

class AdminController {
  /******************** DASHBOARD ADMIN ********************/

  async read(req, res) {
    const service = new DashboardAdmService();
    const result = await service.execute();
    console.log(result["marketTotal"][0].totaldev);
    return res.render("./admin/pages/dashboard.ejs", { data: result });
  }

  async readAdminCart(req, res) {
    const id = req.user.id;
    const service = new IndexCartService();
    const result = await service.indexCart(id);
    console.log("RESULT", result);
    return res.render("./store/pages/cart.ejs", { data: result });
  }

  /******************** LISTAR TODOS OS MARKETPLACES *******************/

  async readAllMarket(req, res) {
    const service = new ReadAllMarketService();
    const market = await service.execute();
    return res.render("./admin/pages/marketplaces.ejs", { data: market });
  }

  /******************** DELETAR UM MARKETPLACE *******************/

  async deleteMarket(req, res) {
    const { id } = req.params;
    console.log("PORRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    console.log(req.params);
    const service = new DeleteMarketService();
    const market = await service.execute(id);

    if (market === null) {
      res.json("Erro");
    } else {
      console.log("Desenvolvedora excluída!");
      return res.redirect("https://fangames.space/admin/marketplaces");
    }
  }

  // Entradas para Marketplace
  async entriesMarket(req, res) {
    const service = new EntriesMarketService();
    const market = await service.execute();
    return res.render("./admin/pages/entries.ejs", { data: market });
  }

  /******************** LISTAR TODOS OS CLIENTES *******************/

  async readAllClient(req, res) {
    console.log("LISTAGEM");
    const service = new ReadAllClientService();
    const client = await service.execute();
    return res.render("./admin/pages/clients.ejs", { data: client });
  }

  /******************** DELETAR UM CLIENTE *******************/

  async deleteClient(req, res) {
    const { id } = req.params;
    const service = new DeleteClientService();
    const client = await service.execute(id);

    if (client === null) {
      res.json("Erro");
    } else {
      console.log("Cliente apagado com sucesso!");
      return res.redirect("https://fangames.space/admin/clientes");
    }
  }
}

export default AdminController;
