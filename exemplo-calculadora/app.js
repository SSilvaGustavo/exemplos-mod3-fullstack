const calculadora = require("./calculadora");

console.log(calculadora.nome);
console.log("Soma: " + calculadora.soma(1, 2));
console.log("Subtração: ", calculadora.sub(5, 3));
console.log("Multiplicação: " + calculadora.multi(5, 3));
console.log("Divisão: ", calculadora.div(15, 3));
