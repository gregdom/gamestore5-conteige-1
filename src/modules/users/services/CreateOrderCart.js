import { query } from "../../../config/db/SnipetConn.js";

class CreateOrderCart {
  async save(iduser, uniqueid, game) {
    const user = iduser;
    const orderid = uniqueid;

    await query(`INSERT INTO orders (idorder, code, id_user, id_status, totalprice) VALUES (NULL, '${orderid}', '${user}', '1', '0');`);
    await query(`INSERT INTO orders_products (idorderproduct, id_order, id_product, price, quantity) VALUES (NULL, '${orderid}', '${game.gameid}', '${game.gameprice}', '1');`);
    const soma = await query(`SELECT SUM(price) AS total FROM orders_products WHERE id_order = ${orderid}`);
    await query(`UPDATE orders SET totalprice = '${soma[0].total}' WHERE code = '${orderid}'`);
  }
}

export default CreateOrderCart;