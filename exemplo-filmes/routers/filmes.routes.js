const express = require('express');
const router = express.Router();
const Filmes = require('../controllers/control')

router.get('/filme', Filmes.getFilme)


router.post('/new', Filmes.addFilme)

router.put('/update/:id', Filmes.upFilme)


module.exports = router;