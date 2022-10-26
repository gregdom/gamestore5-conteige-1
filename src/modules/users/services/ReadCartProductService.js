import ProductQueryModel from "../../products/models/findqueries/ProductQueryModel.js";
import UserQueryModel from "../models/findqueries/UserQueryModel.js";

class ReadCartProductService {
  async execute(iduser, objDetails) {

    const userQueryModelInit = new UserQueryModel();
    const userReturn = await userQueryModelInit.findById(iduser);
    const user = userReturn;

    const productQueryModelInit = new ProductQueryModel();
    const productReturn = await productQueryModelInit.findByPk(objDetails);
    const product = productReturn;
    return { product, user };
  }
}

export default ReadCartProductService;