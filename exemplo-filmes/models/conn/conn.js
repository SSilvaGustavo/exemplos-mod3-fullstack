const mongoose = require('mongoose');

function Conn(url, port, banco){
    mongoose.connect(`mongodb://${url}:${port}/${banco}`,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("BD Conectado")
    }).catch((err) =>{
        console.error(err)
    });
}

module.exports = Conn;