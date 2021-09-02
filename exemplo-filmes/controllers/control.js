const Filmes = require("../models/filmes");

const getFilme = async (req, res) => {
  await Filmes.find({}, (err, filme) => {
    if (err) {
      return res.status(400).send(`Filme Invalido`);
    } else if (!err) {
      return res.status(404).send(`Filme não encontrado`);
    } else {
      return res.status(200).send(filme);
    }
  });
};

const addFilme = (req, res) => {
  const body = req.body;
  if (!body) {
    return res.send(400).send(`Informações invalidas`);
  }
  const filme = new Filmes(body);
  filme
    .save()
    .then(() => {
      res.status(200).send(`Filme adicionado com sucesso!`);
    })
    .catch(() => {
      res.send(400).send(`Falha ao criar o Filme`);
    });
};

const upFilme = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.send(400).send(`Filme Invalido`);
  } else {
    await Filmes.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.status(200).send(`Filme Alterado com Sucesso`))
      .catch(() => res.status(400).send(`Falha ao Alterar`));
  }
};

module.exports = { getFilme, addFilme, upFilme };
