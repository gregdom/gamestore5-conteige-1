import { query } from "../../../config/db/SnipetConn.js";
import ProductQueryModel from "../models/findqueries/ProductQueryModel.js";

class CreateProductService {
  async execute(
    id,
    name,
    slug,
    price,
    description,
    release_date,
    typeindex,
    cpumin,
    videocardmin,
    rammemorymin,
    storagemin,
    cpurec,
    videocardrec,
    rammemoryrec,
    storagerec,
    category,
    mediaurl1,
    mediaurl2,
    mediaurl3,
    mediaurl4,
    mediaurl5,
    mediaurl6,
    mediaurl7,
    mediaurl8,
    mediaurl9,
  ) {
    const productQueryModelInit = new ProductQueryModel();
    const productName = await productQueryModelInit.findByName(name);

    if (productName) {
      return "Já existe um produto com esse nome em nosso sistema!";
    }

    const productSlug = await productQueryModelInit.findBySlug(slug);

    if (productSlug) {
      return "Esse slug já está em uso!";
    }

    const developer = await productQueryModelInit.findByDeveloper(id);

    if (!developer) {
      return "Algo errado aconteceu!";
    }

    const fk_id_developer = developer.iddeveloper;

    await query(
      `INSERT INTO products VALUES (NULL, '${name}', '${slug}', ${price}, '${description}', '${release_date}', '${fk_id_developer}', '1', '${typeindex}');`
    );

    const lastId = await productQueryModelInit.findByLastInsertId(
      fk_id_developer
    );

    await query(
      `INSERT INTO requirementsmin (idreqmin, cpu, videocard, rammemory, storage, id_product_prod) VALUES (NULL, '${cpumin}', '${videocardmin}', '${rammemorymin}', '${storagemin}', '${lastId.idproduct}');`
    );

    await query(
      `INSERT INTO requirementsrec (idreqrec, cpu, videocard, rammemory, storage, id_product_prod) VALUES (NULL, '${cpurec}', '${videocardrec}', '${rammemoryrec}', '${storagerec}', '${lastId.idproduct}');`
    );

    await query(
      `INSERT INTO products_categories (idproductscategories, id_product, id_categories) VALUES (NULL, '${lastId.idproduct}', '${category}');`
    );

    await query(
      `INSERT INTO medias (idmedia, mediapath, id_product_medias, local) VALUES (NULL, '${mediaurl1}', '${lastId.idproduct}', 'imgicon');`
    );
    await query(
      `INSERT INTO medias (idmedia, mediapath, id_product_medias, local) VALUES (NULL, '${mediaurl2}', '${lastId.idproduct}', 'imgdemo');`
    );
    await query(
      `INSERT INTO medias (idmedia, mediapath, id_product_medias, local) VALUES (NULL, '${mediaurl3}', '${lastId.idproduct}', 'imgmain1');`
    );
    await query(
      `INSERT INTO medias (idmedia, mediapath, id_product_medias, local) VALUES (NULL, '${mediaurl4}', '${lastId.idproduct}', 'imgmain2');`
    );
    await query(
      `INSERT INTO medias (idmedia, mediapath, id_product_medias, local) VALUES (NULL, '${mediaurl5}', '${lastId.idproduct}', 'imgmain3');`
    );
    await query(
      `INSERT INTO medias (idmedia, mediapath, id_product_medias, local) VALUES (NULL, '${mediaurl6}', '${lastId.idproduct}', 'imgdemo1');`
    );
    await query(
      `INSERT INTO medias (idmedia, mediapath, id_product_medias, local) VALUES (NULL, '${mediaurl7}', '${lastId.idproduct}', 'imgdemo2');`
    );
    await query(
      `INSERT INTO medias (idmedia, mediapath, id_product_medias, local) VALUES (NULL, '${mediaurl8}', '${lastId.idproduct}', 'imgdemo3');`
    );
    await query(
      `INSERT INTO medias (idmedia, mediapath, id_product_medias, local) VALUES (NULL, '${mediaurl9}', '${lastId.idproduct}', 'imgdemo4');`
    );

    return "O produto foi cadastrado com sucesso!";
  }
}

export default CreateProductService;
