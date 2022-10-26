import { query } from "../../../config/db/SnipetConn.js";
import UserQueryModel from "../models/findqueries/UserQueryModel.js";

class IndexService {
  async index(id) {
    if (!id) {
      const heroQuery = await query(
        `SELECT mainbanner.idmainbanner, mainbanner.title, mainbanner.slug, mainbanner.desc, mainbanner.pathmedia_mobo1, mainbanner.pathmedia_mobo2, mainbanner.pathmedia_deskt, mainbanner.alt FROM mainbanner`
      );
      const hero = heroQuery;

      const galleryQuery = await query(
        `SELECT products.idproduct AS gameid, products.slug AS gameslug, products.name AS gamename, products.price AS gameprice,
        products_categories.id_product AS prodcat, categories.name AS gamecat
        FROM products
        INNER JOIN products_categories
        ON products.idproduct = products_categories.id_product
        INNER JOIN categories
        ON categories.idcategories = products_categories.id_categories WHERE products.typeindex = 2`
      );
      const gallery = galleryQuery;

      const galleryimgQuery = await query(
        `SELECT medias.idmedia AS gameidmedia, medias.id_product_medias AS gameidprodmedia, medias.mediapath AS gamemediapath, medias.local AS localtype FROM medias;`
      );
      const galleryimg = galleryimgQuery;



      const optionsQuery = await query(
        `SELECT products.idproduct AS gameid, products.slug AS gameslug, products.name AS gamename, products.price AS gameprice,
        products_categories.id_product AS prodcat, categories.name AS gamecat
        FROM products
        INNER JOIN products_categories
        ON products.idproduct = products_categories.id_product
        INNER JOIN categories
        ON categories.idcategories = products_categories.id_categories WHERE products.typeindex = 3`
      );
      const options = optionsQuery;

      const optionsimgQuery = await query(
        `SELECT medias.idmedia AS gameidmedia, medias.id_product_medias AS gameidprodmedia, medias.mediapath AS gamemediapath, medias.local AS localtype FROM medias;`
      );
      const optionsimg = optionsimgQuery;

      return { user: 0, hero, gallery, galleryimg, options, optionsimg };

    } else {

      const userQueryModelInit = new UserQueryModel();
      const userReturn = await userQueryModelInit.findById(id);
      const user = userReturn.id_level;

      const heroQuery = await query(
        `SELECT mainbanner.idmainbanner, mainbanner.title, mainbanner.slug, mainbanner.desc, mainbanner.pathmedia_mobo1, mainbanner.pathmedia_mobo2, mainbanner.pathmedia_deskt, mainbanner.alt FROM mainbanner`
      );
      const hero = heroQuery;

      const galleryQuery = await query(
        `SELECT products.idproduct AS gameid, products.slug AS gameslug, products.name AS gamename, products.price AS gameprice,
        products_categories.id_product AS prodcat, categories.name AS gamecat
        FROM products
        INNER JOIN products_categories
        ON products.idproduct = products_categories.id_product
        INNER JOIN categories
        ON categories.idcategories = products_categories.id_categories WHERE products.typeindex = 2`
      );
      const gallery = galleryQuery;

      const galleryimgQuery = await query(
        `SELECT medias.idmedia AS gameidmedia, medias.id_product_medias AS gameidprodmedia, medias.mediapath AS gamemediapath, medias.local AS localtype FROM medias;`
      );
      const galleryimg = galleryimgQuery;



      const optionsQuery = await query(
        `SELECT products.idproduct AS gameid, products.slug AS gameslug, products.name AS gamename, products.price AS gameprice,
        products_categories.id_product AS prodcat, categories.name AS gamecat
        FROM products
        INNER JOIN products_categories
        ON products.idproduct = products_categories.id_product
        INNER JOIN categories
        ON categories.idcategories = products_categories.id_categories WHERE products.typeindex = 3`
      );
      const options = optionsQuery;

      const optionsimgQuery = await query(
        `SELECT medias.idmedia AS gameidmedia, medias.id_product_medias AS gameidprodmedia, medias.mediapath AS gamemediapath, medias.local AS localtype FROM medias;`
      );
      const optionsimg = optionsimgQuery;

      return { user, hero, gallery, galleryimg, options, optionsimg };
    }
  }
}

export default IndexService;
