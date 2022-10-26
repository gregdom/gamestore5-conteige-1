import mercadopago from "mercadopago";
import NotificationService from "../services/NotificationService.js";

class NotificationController {
  async create(req, res) {

    let id = req.query.id;

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

            let extref = pagamento.external_reference;

            if (pagamento.status === "approved") {
              const service = new NotificationService();
              const verifying = await service.execute(extref);
            }

          } else {
            res.json("Pagamento não existe!")
          }

        })
        .catch((error) => {
          res.json(error)
        });
    }, 20000);

    res.send("Ok");
  }
}

export default NotificationController;
