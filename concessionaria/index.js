const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

// LISTAS
const modeloCarro = ["Onix", "HR-V", "HB20", "Fusion"];

const tipoCarro = ["Hatch", "SUV", "Hatch", "Sedan"];

const combustivelCarro = ["Flex", "Gasolina", "Alcool", "Diesel"];

const marcaCarro = ["Chevrolet", "Honda", "Hyundai", "Ford"];

const anoCarro = ["2015", "2019", "2016", "2020"];

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
combustivelCarro.forEach(function (item, indice) {
  console.log(item, indice);
});
console.log(`Total: ${combustivelCarro.length}`);

console.info("\n==== MARCA ====");
marcaCarro.forEach(function (item, indice) {
  console.log(item, indice);
});
console.log(`Total: ${marcaCarro.length}`);

console.info("\n==== ANO ====");
anoCarro.forEach(function (item, indice) {
  console.log(item, indice);
});
console.log(`Total: ${anoCarro.length}`);

//CREATE - POST
//READ - GET
//UPDATE - PUT
//DELETE - DELETE

//CRUD
app.get("/carrolist", (req, res) => {
  res.send(`Modelo: ${modeloCarro}\n
  Tipo: ${tipoCarro}\n
  Combustivel: ${combustivelCarro}\n
  Marca: ${marcaCarro}\n
  Ano: ${anoCarro}`);
});

app.get("/carro/:id", (req, res) => {
  const id = req.params.id - 1;
  const modelo = modeloCarro[id];
  const tipo = tipoCarro[id];
  const combustivel = combustivelCarro[id];
  const marca = marcaCarro[id];
  const ano = anoCarro[id];

  if (id > modeloCarro.length || id < 0) {
    res.send("ID Invalido");
  } else if (modeloCarro[id] == undefined) {
    res.send("ID invalido");
  } else {
    res.send(`Modelo: ${modelo}\n
  Tipo: ${tipo}\n
  Combustivel: ${combustivel}\n
  Marca: ${marca}\n
  Ano: ${ano}`);
  }
});

app.post("/carroadd", (req, res) => {
  const id = modeloCarro.length + 1;
  const modelo = req.body.modelo;
  const tipo = req.body.tipo;
  const combustivel = req.body.combustivel;
  const marca = req.body.marca;
  const ano = req.body.ano;
  modeloCarro.push(modelo);
  tipoCarro.push(tipo);
  combustivelCarro.push(combustivel);
  marcaCarro.push(marca);
  anoCarro.push(ano);

  res.send(`Carro criado com sucesso!\n
    Modelo: Modelo: ${modelo}\n
    Tipo: ${tipo}\n
    Combustivel: ${combustivel}\n
    Marca: ${marca}\n
    Ano: ${ano}\n
    ID: ${id}`);
});

app.put("/carroup/:id", (req, res) => {
  const modelo = req.body.modelo;
  const tipo = req.body.tipo;
  const combustivel = req.body.combustivel;
  const marca = req.body.marca;
  const ano = req.body.ano;
  const id = req.params.id - 1;

  if (id > modeloCarro.length || id < 0) {
    res.send("ID Invalido");
  } else if (modeloCarro[id] == undefined) {
    res.send("ID Invalido");
  } else {
    const modeloAnterior = modeloCarro[id];
    const tipoAnterior = tipoCarro[id];
    const combustivelAnterior = combustivelCarro[id];
    const marcaAnterior = marcaCarro[id];
    const anoAnterior = anoCarro[id];
    modeloCarro[id] = modelo;
    tipoCarro[id] = tipo;
    combustivelCarro[id] = combustivel;
    marcaCarro[id] = marca;
    anoCarro[id] = ano;

    res.send(`Carro alterado com sucesso!\n
  Modelo Anterior: ${modeloAnterior}
  Modelo Atual: ${modelo}\n
  Tipo Anterior: ${tipoAnterior}
  Tipo Atual: ${tipo}\n
  Combustivel Anterior: ${combustivelAnterior}
  Combustivel Atual: ${combustivel}\n
  Marca Anterior: ${marcaAnterior}
  Marca Atual: ${marca}\n
  Ano Anterior: ${anoAnterior}
  Ano Atual: ${ano}`);
  }
});

app.delete("/carrodel/:id", (req, res) => {
  const id = req.params.id - 1;
  const modeloDeletado = modeloCarro[id];
  const tipoDeletado = tipoCarro[id];
  const combustivelDeletado = combustivelCarro[id];
  const marcaDeletado = marcaCarro[id];
  const anoDeletado = anoCarro[id];
  if (id > modeloCarro.length || id < 0) {
    res.send("ID Invalido");
  } else if (modeloCarro[id] == undefined) {
    res.send("ID Invalido");
  } else {
    modelo = modeloCarro.splice(id, 1);
    tipo = tipoCarro.splice(id, 1);
    combustivel = combustivelCarro.splice(id, 1);
    marca = marcaCarro.splice(id, 1);
    ano = anoCarro.splice(id, 1);

    res.send(`Carro deletado com sucesso!\n
  Modelo: ${modeloDeletado}\n
  Tipo: ${tipoDeletado}\n
  Combustivel: ${combustivelDeletado}\n
  Marca: ${marcaDeletado}\n
  Ano: ${anoDeletado}`);
  }
});

app.listen(port, () => {
  console.info(`App esta rodando em: http://localhost:${port}/`);
});
