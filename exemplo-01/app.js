//var -  Variavel de escopo global (Não é mais tao usado)
//let - Varivel de escopo local
//const - Constante de escopo local que não pode ser mudada posteriormente

let nome = 'Pedro';
let idade = 30;
const profissao = "Desenvolvedor";
nome = 'Gustavo';
idade = 20;
const mostrarSite = true;
const site = "https://blueedtech.com.br/";

console.log("Alo Mundo");
console.log("Estou estudando Full-Stack na Blue");
console.log(nome)
console.log(idade + ' anos')


if (mostrarSite) {
  console.log(site);
}
