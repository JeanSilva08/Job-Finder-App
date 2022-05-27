const express = require("express");
const app = express();
const db = require("./db/connection");

const PORT = 3000;

app.listen(PORT, function () {
  console.log(`O Express está rodando  na porta ${PORT}`);
});

// db connection
db.authenticate()
  .then(() => {
    console.log("Conectou ao banco de dados com sucesso");
  })
  .catch((err) => {
    console.log("Ocorreu um erro ao conectar com o banco de dados", err);
  });

//routes
app.get("/", (req, res) => {
  res.send("Aplicação funcionando!");
});
