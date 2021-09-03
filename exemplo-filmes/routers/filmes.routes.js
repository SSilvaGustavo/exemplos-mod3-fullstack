const express = require('express');
const router = express.Router();
const Filmes = require('../controllers/control')

router.get('/filmes', Filmes.getFilme)

router.get('/filme/:id', Filmes.getFilmeId)

router.get('/filmeNome/:name', Filmes.getFilmeName)

router.post('/new', Filmes.addFilme)

router.put('/update/:id', Filmes.upFilme)

router.delete('/delete/:id', Filmes.delFilme)

module.exports = router;