const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

// LISTAS
const modeloCarro = ["Onix", "HR-V", "HB20", "Fusion"];

const tipoCarro = ["Hatch", "SUV", "Hatch", "Sedan"];

const combustivel = ["Flex", "Gasolina", "Alcool", "Diesel"];

const marca = ["Chevrolet", "Honda", "Hyundai", "Ford"];

const ano = ["2015", "2019", "2016", "2020"];

//LISTA E INDICES
console.info("==== MODELO ====");
modeloCarro.forEach(function (item, indice) {
  console.log(item, indice);
});
console.log(`Total: ${modeloCarro.length}`);

console.info("\n==== TIPO ====");
tipoCarro.forEach(function (item, indice) {
  console.log(item, indice);
});
console.log(`Total: ${tipoCarro.length}`);

console.info("\n==== COMBUSTIVEL ====");
combustivel.forEach(function (item, indice) {
  console.log(item, indice);
});
console.log(`Total: ${combustivel.length}`);

console.info("\n==== MARCA ====");
marca.forEach(function (item, indice) {
  console.log(item, indice);
});
console.log(`Total: ${marca.length}`);

console.info("\n==== ANO ====");
ano.forEach(function (item, indice) {
  console.log(item, indice);
});
console.log(`Total: ${ano.length}`);

//READ - GET
//CREATE - POST
//UPDATE - PUT
//DELETE - DELETE

//CRUD modeloCarro
app.get("/modelolist", (req, res) => {
  res.send(modeloCarro);
});

app.get("/modelo/:id", (req, res) => {
  const id = req.params.id;
  const modelo = modeloCarro[id];

  if (id > modeloCarro.length || id < 0) {
    res.send("ID Invalido");
  }
  res.send(modelo);
});

app.post("/modeloadd", (req, res) => {
  const id = modeloCarro.length + 1;
  const modelo = req.body.modelo;
  modeloCarro.push(modelo);

  res.send(`Modelo criado com sucesso!
    Modelo: ${modelo}
    ID: ${id}`);
});

app.put("/modeloup/:id", (req, res) => {
  const modelo = req.body.modelo;
  const id = req.params.id - 1;
  if (id > modeloCarro.length || id < 0) {
    res.send("ID Invalido");
  } else if (modeloCarro[id] == undefined) {
    res.send("ID Invalido");
  } else {
    const modeloAnterior = modeloCarro[id];
    modeloCarro[id] = modelo;

    res.send(`Modelo alterado com sucesso!
  Modelo Anterior: ${modeloAnterior}
  Modelo Atual: ${modelo}`);
  }
});

app.delete("/modelodel/:id", (req, res) => {
  const id = req.params.id - 1;
  const modeloDeletado = modeloCarro[id];
  if (id > modeloCarro.length || id < 0) {
    res.send("ID Invalido");
  } else if (modeloCarro[id] == undefined) {
    res.send("ID Invalido");
  } else {
    modelo = modeloCarro.splice(id, 1);

    res.send(`Modelo deletado com sucesso!
  Modelo: ${modeloDeletado}`);
  }
});

app.listen(port, () => {
  console.info(`App esta rodando em: http://localhost:${port}/`);
});
