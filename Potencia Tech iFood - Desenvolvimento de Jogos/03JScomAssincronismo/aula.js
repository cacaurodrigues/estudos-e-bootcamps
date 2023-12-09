/*const pessoa = {
    genero: 'masculino'
}

const renan = {
    nome:'Renan',
    idade: 30,
    __proto__: pessoa
}
console.log(renan.genero)*/

/* constructor */
function Pessoa(nome, idade){//constructor 
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar =  function () {
    console.log(`Meu nome é: ${this.nome}.`)
}
const carol = new Pessoa('Carol', 30)

console.log(carol)

carol.falar()