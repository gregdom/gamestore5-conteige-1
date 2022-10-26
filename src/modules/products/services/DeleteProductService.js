import { query } from "../../../config/db/SnipetConn.js";
import ProductQueryModel from "../models/findqueries/ProductQueryModel.js";

class DeleteProductService {
  async execute(iduser, idprod) {
    const productQueryModelInit = new ProductQueryModel();
    const developerReturn = await productQueryModelInit.findByDeveloper(iduser); // 52
    const developer = developerReturn.iddeveloper; // 48

    if (!developer) {
      return "Algo errado aconteceu!";
    }

    const productByPk = await productQueryModelInit.findByPk(idprod.id);

    if (!productByPk) {
      return "O produto não existe no sitema!";
    }

    if (productByPk && productByPk.fk_id_developer !== parseInt(developer)) {
      return "Você não tem permissão para excluir o produto!";
    }

    await query(
      `DELETE FROM products WHERE idproduct = ${idprod.id} AND fk_id_developer = ${developer} LIMIT 1`
    );

    return `O produto ${productByPk.name} foi apagado!`;
  }
}

export default DeleteProductService;
