import CreateProductService from "../services/CreateProductService.js";
import ReadProductService from "../services/ReadProductService.js";
import UpdateProductService from "../services/UpdateProductService.js";
import UpdateReadProductService from "../services/UpdateReadProductService.js";
import DeleteProductService from "../services/DeleteProductService.js";

class MarketController {
  /******************** CRIAR PRODUTO ********************/

  async create(req, res) {
    const id = req.user.id;
    const {
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
    } = req.body;
    console.log(
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
      mediaurl5
    );
    const service = new CreateProductService();
    const product = await service.execute(
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
    );
    return res.render("./users/pages/products/register.ejs", { data: "Tudo certo!" });
  }

  /******************** LISTAR PRODUTO *******************/

  async read(req, res) {
    const id = req.user.id;
    const service = new ReadProductService();
    const product = await service.execute(id);

    const data = { product };
    console.log(data.product[0].idproduct);

    return res.render("./users/pages/products/listproducts.ejs", { data: product });
  }

  /******************** ATUALIZAR PRODUTO ****************/
  async readUpdate(req, res) {
    const id = req.user.id;
    const idprod = req.params;
    const service = new UpdateReadProductService();
    const product = await service.execute(id, idprod);
    return res.render("./users/pages/products/updateproducts.ejs", { data: product });
  }

  async update(req, res) {
    const id = req.user.id;
    const { idprod } = req.body;
    const objDetails = {
      name: req.body.name,
      slug: req.body.slug,
      price: req.body.price,
      description: req.body.description,
      release_date: req.body.release_date,
      typeindex: req.body.typeindex,
      cpumin: req.body.cpumin,
      videocardmin: req.body.videocardmin,
      rammemorymin: req.body.rammemorymin,
      storagemin: req.body.storagemin,
      cpurec: req.body.cpurec,
      videocardrec: req.body.videocardrec,
      rammemoryrec: req.body.rammemoryrec,
      storagerec: req.body.storagerec,
      category: req.body.category,
      media: [
        { mediaurl: req.body.mediaurl1 },
        { mediaurl: req.body.mediaurl2 },
        { mediaurl: req.body.mediaurl3 },
        { mediaurl: req.body.mediaurl4 },
        { mediaurl: req.body.mediaurl5 },
        { mediaurl: req.body.mediaurl6 },
        { mediaurl: req.body.mediaurl7 },
        { mediaurl: req.body.mediaurl8 },
        { mediaurl: req.body.mediaurl9 },
      ],
    };
    // console.log(id, idprod, objDetails);
    const service = new UpdateProductService();
    await service.execute(id, idprod, objDetails);
    return res.redirect("https://fangames.space/marketplaces/products");
  }

  /******************** DELETAR PRODUTO ******************/

  async delete(req, res) {
    const iduser = req.user.id;
    const idprod = req.params;
    console.log("TESTES", iduser, idprod);
    const service = new DeleteProductService();
    const product = await service.execute(iduser, idprod);
    return res.redirect("https://fangames.space/marketplaces/products");
  }

  async market(req, res) {
    const iduser = req.user.id;
    return res.render("./users/pages/products/register.ejs");
  }
}

export default MarketController;
