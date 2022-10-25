import mysql from "mysql";

const connection = mysql.createConnection({
  host: "mysql-ag-br1-11.conteige.cloud",
  user: "booxfo_gamestore",
  password: "gamestore##",
  database: "booxfo_teste1",
});

connection.connect();

connection.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
  if (error) throw error;
  console.log("O resultado é: ", results[0].solution, "arquivo database");
});

export default connection;
