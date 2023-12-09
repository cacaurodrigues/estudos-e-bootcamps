/* Importação:

const funcoes = require('./funcao-auxiliar');

console.log(funcoes); // verificar importações

console.log(funcoes.gets()); //usar função importada */

/* object destructuring:

const pessoa = { nome: 'Victor'}; // objeto

const {nome} = pessoa;  // object destructuring
 
const nome = pessoa.nome; // equivalente ao object destructuring*/

//Com isso temos que a importaçao poderia ser:



/* sala de 5 alunos, cada recebe 5 numeros de 1 a 100. Mostre o maior numero sorteado

Dados de entrada:
5
50
10 
98
23

saida: 98 */

/* const {gets, print} = require('./funcao-auxiliar');

const numeroSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numeroSorteados.push(numeroSorteado);
}

print(numeroSorteados);

let maiorValor = 0;

for (let i = 0; i < numeroSorteados.lenght; i++) {
    const numeroSorteado = numeroSorteados[i];
    if (numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}

print(maiorValor); */

const {gets, print} = require('./funcao-auxiliar');

const quantidadeNumeros = gets();
let maiorValor = 0;

for (let i = 0; i < quantidadeNumeros; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);