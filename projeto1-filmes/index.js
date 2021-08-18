const express = require("express");
const app = express();

const port = 3000;

const filmes = [
  "O Reino Proibido",
  "Shrek",
  "Os incriveis",
  "Homem-Aranha",
  "Os Vingadores",
  "A Chorona",
  "Invocação do mal",
  "Luca",
  "Jungle Cruise",
];

const msgInicio = [
  "Bem vindos e bom filme",
  "Ola amigos, bem vindo ao servidor de filmes",
  "Servidor de filmes",
  "Este é meu servidor de filmes",
  "Pegue sua pipoca",
];

function randomMinMax(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomFrase(num) {
  return msgInicio[num];
}

function randomFilmes(num) {
  return filmes[num];
}

console.log(randomFrase(randomMinMax(0, msgInicio.length)));
console.log(randomFilmes(randomMinMax(0, filmes.length)));

//GET / home
app.get("/", (req, res) => {
  res.send(`<h1>${randomFrase(randomMinMax(0, msgInicio.length + 1))}</h1>`);
});

app.get("/filmes", (req, res) => {
  res.send(`<h1>${randomFilmes(randomMinMax(0, filmes.length + 1))}</h1>`);
});

filmes.forEach(function (item, indice) {
  console.log(item, indice);
});

app.get("/filmes/:id", (req, res) => {
  const id = req.params.id - 1;
  const filme = filmes[id];
  if (id > filmes.length - 1 || id < 1) {
    res.send("ID invalido\nTente novamente.");
  } else {
    res.send(filme);
  }
});

console.log(filmes.length);

app.listen(port, () => {
  console.info(`App esta rodando em: http://localhost:${port}/`);
});
