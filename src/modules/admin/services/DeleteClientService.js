import { query } from "../../../config/db/SnipetConn.js";
import ClientQueryModel from "../models/findqueries/ClientQueryModel.js";

class DeleteClientService {
  async execute(id) {
    const clientQueryModelInit = new ClientQueryModel();
    const client = await clientQueryModelInit.findById(id);

    if (!client) {
      return null;
    }
    await query(`UPDATE users SET id_level = 4 WHERE iduser = ${id} LIMIT 1;`);
    return true;
  }
}

export default DeleteClientService;
