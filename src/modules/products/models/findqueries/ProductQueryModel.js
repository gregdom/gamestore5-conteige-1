import { query } from "../../../../config/db/SnipetConn.js";

class ProductQueryModel {
  
  /******************** PROCURA PRODUTO PELO NOME ********************/

  async findByName(name) {
    const product = await query(
      `SELECT * FROM products WHERE name = '${name}';`
    );
    console.log("QUERING MODEL > NAME", product[0]);
    return product[0];
  }

  /******************** PROCURA PRODUTO PELO SLUG ********************/

  async findBySlug(slug) {
    const product = await query(
      `SELECT * FROM products WHERE slug = '${slug}';`
    );
    console.log("QUERING MODEL > SLUG", product[0]);
    return product[0];
  }

  /************ PROCURA PRODUTO PELO ID DA DESENVOLVEDORA ************/

  async findAll(id) {
    const product = await query(
      `SELECT * FROM products WHERE fk_id_developer = ${id}`
    );
    return product;
  }

  /********************* PROCURA PRODUTO PELO ID *********************/

  async findByPk(id) {
    const product = await query(
      `SELECT * FROM products WHERE idproduct = ${id}`
    );
    return product[0];
  }

  /************* PROCURA PRODUTO PELO ÚLTIMO ID INSERIDO *************/

  async findByLastInsertId(fk_id_developer) {
    const idprod = await query(
      `SELECT idproduct FROM products WHERE fk_id_developer = ${fk_id_developer} ORDER BY idproduct DESC LIMIT 1;`
    );
    console.log(idprod, idprod[0], "IDPROD");
    return idprod[0];
  }

  /***************** PROCURA DESENVOLVEDORA PELO ID ******************/

  async findByDeveloper(id) {
    const developer = await query(
      `SELECT * FROM developers WHERE id_user = ${id};`
    );
    console.log("QUERING MODEL > DEVELOPER", developer[0]);
    return developer[0];
  }
}

export default ProductQueryModel;
