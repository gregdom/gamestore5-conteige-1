import { query } from "../../../config/db/SnipetConn.js";

class ReadMarketService {
  async execute(id) {
    const marketInit = await query(
      `SELECT * FROM developers WHERE id_user = ${id};`
    );
    const market = marketInit[0];

    console.log(market);

    if (!market) {
      return null;
    }

    return market;
  }
}

export default ReadMarketService;
