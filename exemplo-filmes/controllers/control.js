const Filmes = require("../models/filmes");

const getFilme = async (req, res) => {
  await Filmes.find({}, (err, filme) => {
    if (err) {
      return res.status(400).send(`Filme Invalido`);
    } else {
      return res.status(200).send(filme);
    }
  });
};

const getFilmeId = async (req, res) => {
  await Filmes.find({ _id: req.params.id })
    .then((filme) => {
      res.status(200).send(`Filme encontrado com sucesso 
    ${filme}`);
    })
    .catch((err) => {
      res.status(400).send(`ID invalido, tente novamente 
    ${err}`);
    });
};

const getFilmeName = async (req, res) => {
  await Filmes.find({ nome: req.params.name })
    .then((filme) => {
      console.log(filme);
      res.status(200).send(`Filme encontrado com sucesso 
      ${filme}`);
    })
    .catch((err) => {
      res.status(400).send(`Nome invalido tente novamente
    ${err}`);
    });
};

const addFilme = (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).send(`Informações invalidas`);
  }else if(!body.nome || !body.imagem || !body.genero || !body.anoLancamento){
    return res.status(400).send(`Informações invalidas verifique se as informações obrigatorias estão preenchidas.

    nome: ${body.nome}
    imagem: ${body.imagem}
    genero: ${body.genero}
    anoLancamento: ${body.anoLancamento}`);
  }else{
  const filme = new Filmes(body);
  filme
    .save()
    .then(() => {
      res.status(201).send(`Filme adicionado com sucesso!`);
    })
    .catch(() => {
      res.send(400).send(`Falha ao criar o Filme`);
    })};
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

const delFilme = async (req, res) => {
  await Filmes.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).send("Filme Deletado");
    })
    .catch((err) => {
      res.status(400).send("Falha ao deletar o filme");
      console.log(err);
    });
};
module.exports = {
  getFilme,
  addFilme,
  upFilme,
  delFilme,
  getFilmeId,
  getFilmeName,
};
