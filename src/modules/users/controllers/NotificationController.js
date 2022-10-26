import mercadopago from "mercadopago";
import NotificationService from "../services/NotificationService.js";

class NotificationController {
  async create(req, res) {
    console.log("Página de notificação IPN");
    console.log(req.query);

    let id = req.query.id;
    console.log("ID DA QUERY", id);

    setTimeout(() => {
      let filtro = {
        "order.id": id,
      };
      mercadopago.payment
        .search({
          qs: filtro,
        })
        .then(async (data) => {
          let pagamento = data.body.results[0];

          if (pagamento != undefined) {
            console.log(pagamento.external_reference);
            console.log(pagamento.status);

            let extref = pagamento.external_reference;

            if (pagamento.status === "approved") {
              const service = new NotificationService();
              const verifying = await service.execute(extref);
              console.log("VERIFYING", verifying);
            }

          } else {
            console.log("Pagamento não existe!");
          }

          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 20000);

    res.send("Ok");
  }
}

export default NotificationController;
