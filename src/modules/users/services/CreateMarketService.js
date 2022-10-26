import { query } from "../../../config/db/SnipetConn.js";
// import UserQueryModel from "../models/findqueries/UserQueryModel.js";
import ProductQueryModel from "../../products/models/findqueries/ProductQueryModel.js";

class CreateMarketService {
  async execute(_iduser, name, cnpj) {
    const queryModelInit = new ProductQueryModel();
    const developerExists = await queryModelInit.findByDeveloper(_iduser);

    if (developerExists) {
      return "Você já é um marketplace!";
    }

    const entriesExists = await query(
      `SELECT * FROM entriesmarket WHERE id_user = ${_iduser}`
    );
    const entriesmarket = entriesExists[0];

    if (entriesmarket && entriesmarket.id_entriesstatus === 1) {
      return "Uma solicitação anterior já está em avaliação. Aguarde nossa resposta por email!";
    }

    await query(
      `INSERT INTO entriesmarket (identriesmarket, id_user, name, cnpj, createdat, id_entriesstatus) VALUES (NULL, '${_iduser}', '${name}', '${cnpj}', NOW(), 1);`
    );

    return "Sua solicitação de Marketplace foi recebida! Enviaremos uma resposta em até 24 horas.";
  }
}

export default CreateMarketService;
