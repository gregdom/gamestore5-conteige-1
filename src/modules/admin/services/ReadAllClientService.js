import ClientQueryModel from "../models/findqueries/ClientQueryModel.js";

class ReadAllClientService {
  async execute() {
    const clientQueryModelInit = new ClientQueryModel();
    const client = await clientQueryModelInit.findAll();

    if (!client) {
      return "Usuário não encontrado!";
    }
    return client;
  }
}

export default ReadAllClientService;
