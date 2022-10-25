import { query } from "../../../config/db/SnipetConn.js";

class DashboardAdmService {
  async execute() {
    const marketTotal = await query(`SELECT COUNT(name) AS totaldev FROM developers`);
    const clientsTotal = await query(`SELECT COUNT(name) AS totalclients FROM users WHERE id_level = 1`);
    const ordersTotal = await query(`SELECT COUNT(code) AS totalorders FROM orders`);

    return { marketTotal, clientsTotal, ordersTotal }
  }
}

export default DashboardAdmService;