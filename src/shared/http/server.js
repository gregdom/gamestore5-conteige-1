import cookieParser from "cookie-parser";
import express from "express";
import MercaPago from "mercadopago";
import routes from "./routes/index.js";
import expressLayouts from "express-ejs-layouts";

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.PORT || 3000;
const app = express();

MercaPago.configure({
  sandbox: true,
  access_token: "TEST-4772220940583003-080610-156191436cb778d3831243248487c276-132376939",
})

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

app.use(express.static('./public'));

app.set('views', path.join(__dirname), 'views');
app.set('views', './views');
app.set('view engine', 'ejs');


app.use(routes);

app.listen(port, () => {
  console.log(
    `Servidor rodando em: http://localhost:${port} arquivo (server.js)`
  );
});
