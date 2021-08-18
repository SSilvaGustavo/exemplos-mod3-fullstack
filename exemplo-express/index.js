const express = require("express");
const app = express();

app.get('/', function(req, res){
    res.send('Hello World');
})

app.listen(3000);

app.get('/blue', function(req, res){
    res.send('<h1>Welcome, Bluemer<h1>')
})

app.listen(3000)