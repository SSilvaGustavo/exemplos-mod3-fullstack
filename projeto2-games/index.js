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

console.log(games.length);

//READ - GET
//CREATE - POST
//UPDATE - PUT
//DELETE - DELETE

app.get("/games/:id", (req, res) => {
  const id = req.params.id - 1;
  const game = games[id];
  if (id > games.length - 1 || id < 1) {
    res.send("ID invalido\nTente novamente.");
  } else {
    res.send(game);
  }
});

app.post("/games", (req, res) => {
  const game = req.body.filme;
  const id = games.length + 1;

  games.push(game);

  res.send(`Game adicionado com sucesso!
  Game: ${game}
  ID do Game: ${id}`);
});

app.put("/games/:id", (req, res) => {
  const gameAnterior = games[id];
  const game = req.body.game;
  const id = req.params.id - 1;

  games[id] = game;

  res.send(`Game alterado com sucesso!
  Game Anterior: ${gameAnterior}
  Game Atual: ${game}`);
});

app.delete("/games/:id", (req, res) => {
  const id = req.params.id - 1;
  const gameDeletado = games[id];

  if (id > games.length || id < 0) {
    res.send("ID não encontrado, tente novamente!");
  }
  delete games[id];
  res.send(`Game deletado com sucesso!
  Game: ${gameDeletado}`);
});

app.listen(port, () => {
  console.info(`App esta rodando em: http://localhost:${port}/`);
});
