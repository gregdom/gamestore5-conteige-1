import { query } from "../../../../config/db/SnipetConn.js";

class ClientQueryModel {

  /********************* PROCURA TODAS OS CLIENTES *********************/

  async findAll() {
    const client = await query(
      `SELECT users.iduser AS id, users.name AS Cliente, users.email AS Contato FROM users WHERE id_level = 1;`
    );
    return client;
  }

  /********************* PROCURA CLIENTE PELO ID *********************/

  async findById(id) {
    const client = await query(`SELECT * FROM users WHERE iduser = ${id};`);
    return client[0];
  }
}

export default ClientQueryModel;
