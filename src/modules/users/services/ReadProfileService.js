import { query } from "../../../config/db/SnipetConn.js";
import UserQueryModel from "../models/findqueries/UserQueryModel.js";

class ReadProfileService {
  async execute(id) {
    const userQueryModelInit = new UserQueryModel();
    const user = await userQueryModelInit.findById(id);

    if (!user) {
      return "Usuário não encontrado!";
    }

    // Seleciona todos os jogos comprados pelo jogo
    const orders =
      await query(`SELECT users.iduser AS UserId, orders.id_status AS OrderSt, orders_products.idorderproduct AS GameId, products.name AS GameName, products.idproduct AS GameProdId
      FROM users
      INNER JOIN orders
      ON users.iduser = orders.id_user
      INNER JOIN orders_products
      ON orders_products.id_order = orders.code
      INNER JOIN products
      ON orders_products.id_product = products.idproduct
      INNER JOIN positions
      ON orders.id_status = positions.idpositions
      WHERE users.iduser = ${id} AND positions.name = 'Aprovado'`);

    return orders;
  }
}

export default ReadProfileService;
