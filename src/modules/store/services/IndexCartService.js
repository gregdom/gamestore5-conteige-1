import UserQueryModel from "../models/findqueries/UserQueryModel.js";

class IndexCartService {
  async indexCart(id) {
    if (id) {
      const userQueryModelInit = new UserQueryModel();
      const userReturn = await userQueryModelInit.findById(id);
      const user = userReturn.id_level;
      return { user };
    }

    return { user: 0 };
  }
}

export default IndexCartService;