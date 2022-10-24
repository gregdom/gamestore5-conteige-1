import ProductQueryModel from "../models/findqueries/ProductQueryModel.js";

class ReadProductService {
  async execute(id) {
    const productQueryModelInit = new ProductQueryModel();
    const developer = await productQueryModelInit.findByDeveloper(id);
    const product = await productQueryModelInit.findAll(developer.iddeveloper);

    if (product.length === 0) {
      return "Não há produtos!";
    }

    return product;
  }
}

export default ReadProductService;
