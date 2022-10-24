import StoreQueryModel from "../models/findqueries/StoreQueryModel.js";
import UserQueryModel from "../models/findqueries/UserQueryModel.js";

class SlugService {
  async findSlug(id, slug) {
    console.log("PORRA DE SLUG", slug)
    if (id) {
      const userQueryModelInit = new UserQueryModel()
      const userReturn = await userQueryModelInit.findById(id);
      const user = userReturn.id_level;

      const storeQueryModelInit = new StoreQueryModel();
      const product = await storeQueryModelInit.findBySlug(slug);
      const productimg = await storeQueryModelInit.findImgBySlug(product[0].gameid);

      return { user, product, productimg };

    } else {

      const storeQueryModelInit = new StoreQueryModel();
      const product = await storeQueryModelInit.findBySlug(slug);
      console.log("TEM PRODUTO SIM", product[0])
      const productimg = await storeQueryModelInit.findImgBySlug(product[0].gameid);
      return { user: 0, product, productimg };
    }
  }
}

export default SlugService;
