const mongoose = require("mongoose");

const filmesModel = new mongoose.Schema({
  nome: { type: String, require: true },
  imagem: { type: String, require: true },
  genero: { type: String, require: true },
  sinopse: { type: String },
  duracao: { type: Number },
  anoLançamento: { type: Number, require: true },
  dataCriacao: { type: Date, default: Date.now },
});

const Filmes = mongoose.model("filmes", filmesModel);

module.exports = Filmes;
