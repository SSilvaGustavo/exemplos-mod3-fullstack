const express = require("express");
const app = express();

const port = 3000;

app.use(express.json()); //Informa para o req rodar usando Json

const games = [
  "GTA",
  "Ragnarok",
  "Tibia",
  "Minecraft",
  "The Sims",
  "Mortal kombat",
  "SuperMarioWorld",
  "Bomberman",
  "Just Dance",
  "Call of Duty",
];

const msgInicio = [
  "Bem vindos",
  "Ola amigos, bem vindo ao servidor de games",
  "Servidor de jogos",
  "Este é meu servidor",
];

function randomMinMax(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomFrase(num) {
  return msgInicio[num];
}

function randomGames(num) {
  return games[num];
}

console.log(randomFrase(randomMinMax(0, msgInicio.length)));
console.log(randomGames(randomMinMax(0, games.length)));

const msg = "teste";
//GET / home
app.get("/", (req, res) => {
  res.send(`<h1>${randomFrase(randomMinMax(0, msgInicio.length + 1))}</h1>`);
});

app.get("/games", (req, res) => {
  res.send(`<h1>${randomGames(randomMinMax(0, games.length + 1))}</h1>`);
});

games.forEach(function (item, indice) {
  console.log(item, indice);
});

app.get("/games/:id", (req, res) => {
  const id = req.params.id - 1;
  const game = games[id];
  if (id > games.length - 1 || id < 1) {
    res.send("ID invalido\nTente novamente.");
  } else {
    res.send(game);
  }
});

console.log(games.length);

app.listen(port, () => {
  console.info(`App esta rodando em: http://localhost:${port}/`);
});
