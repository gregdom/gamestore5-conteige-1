import { query } from "../../../config/db/SnipetConn.js";
import ProductQueryModel from "../models/findqueries/ProductQueryModel.js";

class UpdateProductService {
  async execute(id, idprod, objDetails) {
    const productQueryModelInit = new ProductQueryModel();
    const developerReturn = await productQueryModelInit.findByDeveloper(id);
    const developer = developerReturn.iddeveloper;

    if (!developer) {
      return "Algo errado aconteceu!";
    }

    /************************** PRODUTO EXISTE E NÃO É DA DESENVOLVEDORA LOGADA **************************/

    const productName = await productQueryModelInit.findByName(objDetails.name);
    if (productName && productName.fk_id_developer !== parseInt(developer)) {
      return "Esse nome está em uso por outra desenvolvedora!";
    }

    const productSlug = await productQueryModelInit.findBySlug(objDetails.slug);
    if (productSlug && productSlug.fk_id_developer !== parseInt(developer)) {
      return "Slug não disponível!";
    }

    /************************** PRODUTO EXISTE, NÃO É DA DESENVOLVEDORA, NÃO TEM MESMO ID *************/

    if (productName && productName.idproduct !== parseInt(idprod)) {
      return "Você já tem um outro jogo cadastrado com esse nome!";
    }

    if (productSlug && productSlug.idproduct !== parseInt(idprod)) {
      return "Você está usando esse Slug em outro jogo!";
    }

    await query(
      `UPDATE products SET name = '${objDetails.name}', slug = '${objDetails.slug}', price = '${objDetails.price}', description = '${objDetails.description}', release_date = '${objDetails.release_date}', typeindex = '${objDetails.typeindex}' WHERE idproduct = ${idprod} AND fk_id_developer = ${developer};`
    );

    await query(
      `UPDATE products_categories SET id_categories = '${objDetails.category}' WHERE id_product = ${idprod};`
    );

    await query(
      `UPDATE requirementsmin SET cpu = '${objDetails.cpumin}', videocard = '${objDetails.videocardmin}', rammemory = '${objDetails.rammemorymin}', storage = '${objDetails.storagemin}' WHERE id_product_prod = ${idprod};`
    );

    await query(
      `UPDATE requirementsrec SET cpu = '${objDetails.cpurec}', videocard = '${objDetails.videocardrec}', rammemory = '${objDetails.rammemoryrec}', storage = '${objDetails.storagerec}' WHERE id_product_prod = ${idprod};`
    );

    await query(
      `DELETE FROM medias WHERE id_product_medias = ${idprod} LIMIT 9`
    );

    let arrlocal = ["imgicon", "imgdemo", "imgmain1", "imgmain2", "imgmain3", "imgdemo1", "imgdemo2", "imgdemo3", "imgdemo4"];
    let i = 0;
    objDetails.media.forEach((element) => {
      query(
        `INSERT INTO medias (idmedia, mediapath, id_product_medias, local) VALUES (NULL, '${element.mediaurl}', ${idprod}, '${arrlocal[i]}');`
      );
      i++;
    });

    return "Informações do produto atualizadas com sucesso!";
  }
}

export default UpdateProductService;
