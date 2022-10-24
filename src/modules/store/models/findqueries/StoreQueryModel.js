import { query } from "../../../../config/db/SnipetConn.js";

class StoreQueryModel {
  async indexStore() {
    const init = await query(
      `SELECT products.name AS gamename, products.slug AS gameslug, products.price AS gameprice FROM products`
    );
    const result = init;
    return result;
  }

  async findBySlug(slug) {
    const init = await query(
      `SELECT products.idproduct AS gameid, products.name AS gamename, products.slug AS gameslug, products.price AS gameprice,
      products.description AS gamedesc, products.release_date AS gamedate,
      requirementsmin.cpu AS gamecpumin, requirementsmin.videocard AS gamevdcardmin, requirementsmin.rammemory AS gamerammin, requirementsmin.storage AS gamestrmin, requirementsmin.id_product_prod AS gamereqminid,
      requirementsrec.cpu AS gamecpurec, requirementsrec.videocard AS gamevdcardrec, requirementsrec.rammemory AS gameramrec, requirementsrec.storage AS gamestrrec, requirementsrec.id_product_prod AS gamereqrecid
      FROM products
      INNER JOIN requirementsmin
      ON products.idproduct = requirementsmin.id_product_prod
      INNER JOIN requirementsrec
      ON products.idproduct = requirementsrec.id_product_prod
      WHERE products.slug = '${slug}'`
    );
    const product = init;

    console.log("SLUG COM IMAGEM", product[0]);
    return product;
  }

  async findImgBySlug(slug) {
    const initimg = await query(
      `SELECT medias.idmedia AS gameidmedia, medias.id_product_medias AS gameidprodmedia, medias.mediapath AS gamemediapath
        FROM medias
        WHERE medias.id_product_medias = '${slug}'`
    );
    const productimg = initimg;
    return productimg;
  }
}

export default StoreQueryModel;
