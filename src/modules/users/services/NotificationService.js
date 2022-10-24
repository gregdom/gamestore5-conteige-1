import { query } from "../../../config/db/SnipetConn.js";

class NotificationService {
  async execute(extref) {
    const updatestatus = await query(`UPDATE orders SET id_status = 2 WHERE code = '${extref}' LIMIT 1`);
    return updatestatus;
  }
}

export default NotificationService;