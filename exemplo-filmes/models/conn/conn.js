const mongoose = require('mongoose');

function Conn(url, port, banco){
    mongoose.connect(`mongodb+srv://dbUser:blueUser123@blue-db.3qloa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("BD Conectado")
    }).catch((err) =>{
        console.error(err)
    });
}

module.exports = Conn;