import { query } from "../../../../config/db/SnipetConn.js";

class MarketQueryModel {
  /********************* PROCURA TODAS AS DESENVOLVEDORAS *********************/

  async findAll() {
    const market =
      await query(`SELECT developers.iddeveloper AS ID, developers.name AS Desenvolvedora, users.name AS CEO, users.email AS Contato FROM developers
      JOIN users
      ON developers.id_user = users.iduser;`);
    return market;
  }

  /********************* PROCURA DESENVOLVEDORA PELO ID *********************/

  async findById(id) {
    const user = await query(
      `SELECT * FROM developers WHERE iddeveloper = ${id};`
    );
    return user[0];
  }

  async findAllEntries() {
    const market = await query(`SELECT identriesmarket, name AS Empresa, cnpj AS CNPJ FROM entriesmarket WHERE id_entriesstatus = 1;`);
    return market;
  }
}

export default MarketQueryModel;
