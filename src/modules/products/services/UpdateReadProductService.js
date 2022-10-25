import { query } from "../../../config/db/SnipetConn.js";
import ProductQueryModel from "../models/findqueries/ProductQueryModel.js";

class UpdateReadProductService {
  async execute(id, idprod) {
    const productQueryModelInit = new ProductQueryModel();
    const developer = await productQueryModelInit.findByDeveloper(id); // 52 > 48

    if (!developer) {
      return "Você não tem permissão de Desenvolvedora!";
    }

    const productInit = await query(
      `SELECT products.idproduct AS id, products.name AS product, products.slug AS slug, products.price AS price,
      products.description AS description, products.release_date AS release_datetime,
      requirementsmin.cpu AS cpumin, requirementsmin.videocard AS vdcardmin, requirementsmin.rammemory AS rammin, requirementsmin.storage AS strmin, requirementsmin.id_product_prod AS reqminid,
      requirementsrec.cpu AS cpurec, requirementsrec.videocard AS vdcardrec, requirementsrec.rammemory AS ramrec, requirementsrec.storage AS strrec, requirementsrec.id_product_prod AS reqrecid
      FROM products
      INNER JOIN requirementsmin
      ON products.idproduct = requirementsmin.id_product_prod
      INNER JOIN requirementsrec
      ON products.idproduct = requirementsrec.id_product_prod
      WHERE products.idproduct = ${idprod.id} AND fk_id_developer = ${developer.iddeveloper};`
    );
    const product = productInit[0];

    if (!product) {
      return "Não há produtos!";
    }

    const productImageInit = await query(
      `SELECT medias.mediapath AS images, medias.idmedia AS mediaid FROM medias
    WHERE medias.id_product_medias = ${idprod.id};`
    );

    return {
      product,
      productImageInit,
    };
  }
}

export default UpdateReadProductService;
