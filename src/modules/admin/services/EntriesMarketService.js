import MarketQueryModel from "../models/findqueries/MarketQueryModel.js";

class EntriesMarketService {
  async execute() {
    const marketQueryModelInit = new MarketQueryModel();
    const market = await marketQueryModelInit.findAllEntries();

    if (!market) {
      return "Usuário não encontrado!";
    }

    return market;
  }
}

export default EntriesMarketService;
