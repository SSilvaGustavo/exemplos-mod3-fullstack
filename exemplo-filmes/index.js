const express = require('express')
const app = express()
app.use(express.json())

const port = 3000;

const Conn = require('./models/conn/conn')

Conn("localhost", 27017, "filmes")

const filme = require('./routers/filmes.routes')
app.use('/filmes', filme)

app.listen(port, () => {
    console.info(`Servidor rodando na porta ${port}`)
})