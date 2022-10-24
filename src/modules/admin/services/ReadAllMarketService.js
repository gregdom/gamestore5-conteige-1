import MarketQueryModel from "../models/findqueries/MarketQueryModel.js";

class ReadAllMarketService {
  async execute() {
    const marketQueryModelInit = new MarketQueryModel();
    const market = await marketQueryModelInit.findAll();

    if (!market) {
      return "Usuário não encontrado!";
    }

    return market;
  }
}

export default ReadAllMarketService;
