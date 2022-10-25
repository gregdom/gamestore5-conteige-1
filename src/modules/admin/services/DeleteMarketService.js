import { query } from "../../../config/db/SnipetConn.js";
import MarketQueryModel from "../models/findqueries/MarketQueryModel.js";

class DeleteMarketService {
  async execute(id) {
    const marketQueryModelInit = new MarketQueryModel();
    const market = await marketQueryModelInit.findById(id);

    if (!market) {
      return null;
    }

    await query(`DELETE FROM developers WHERE iddeveloper = ${id} LIMIT 1;`);

    return true;
  }
}

export default DeleteMarketService;
