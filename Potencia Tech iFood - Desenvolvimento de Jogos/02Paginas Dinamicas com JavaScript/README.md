# Primeiros Passos

## JavaScript
Arquivos JavaScript recebem a extensão: ".js". Para executar, pode-se adicionar no terminal o comando: "node <nome do arquivo>".

Para fazer a primeira impressão usamos console, para fazer referência ao terminal, e log para indicar uma impressão:

~~~java
console.log('Olá, Mundo!');
~~~

### Declarando Variáveis:
É possível declarar variaveis com let e const, uma variável que pode ser alterada posteriormente e uma constante respecticamente:

~~~java
let variavel = 10;
variavel = 20

const pi = 3.14;
~~~

Nesse caso temos que uma variável 10 foi declarada e modificada para 20 depois. Já a constante pi foi um valor imutável dentro do programa declarado.

### Estruturas Condicionais

1. Boolean: valor binário que tem valor 0 ou 1. Sintaxe para 

~~~java
const camiseta = true;
~~~

2. Operadores de Igualdade:
- atribuição: "="

- igualdade: "==" ou "===". Sendo que "==" ignora o tipo (faz conversão implicita), por isso o "===" é o mais usado.

3. If e Else

~~~java
if (<condicional>){
    <código a ser executado se true>;
}
else{
    <opção para false>;
}
~~~

Obs.: É possível negar uma condição com exclamação:

~~~java
if (!<condicional negada>){
    <código a ser executado se true>;
}
~~~

É possivel aninhar condicionais que excluem as próximas com else if:

~~~java
const numero = 1;
const isPar= numero % 2 === 0;

if (numero === 0){
    console.log('Número é inválido');
} else if (isPar){
    console.log('É par');
} else {
    console.log('Não é par');
}
~~~

Obs.: A quantidade de "else if" não é limitada, pode ser aninhado quantas vezes necessário (cuidado pois dificulta leitura). Apenas atentar para não colocar um "else" antes do "if else", pois ele finaliza as condicionais.

# Funções com JavaScript

- Declaração de funções em JS segue a sintaxe:

~~~java
function nomeFunção(parametro){
    console.log('Uso do'+parametro);
}

 nomeFunção('Parametro escolhido');
~~~

Obs.: para retornar valores, usar return. Esse valor retornado deve ser salvo e impresso 

~~~java
function quadrado(valor){
    return valor * valor;
}

const numQUadrado = quadrado(5);
console.log(numQUadrado);
~~~

Ou impresso diretamente no console para conseguir visualizar

~~~java
function quadrado(valor){
    return valor * valor;
}

console.log(quadrado(5));
~~~

- Organização em JS é feita com funções, sendo a principal denominada por padrão "main" e dentro dela é chamado as demais funções chamadas auxiliares. 

~~~java
function auxiliar1(){

}

function main(){
    const resultado = auxiliar();
}

main();
~~~

Outra possibilidade é colocar a função main entre parentese e um parentese depois, nesse caso a função se resolve e automáticamente se chama. Sendo possível nesse caso deixa-la sem nome (mas aí não será possível chama-la, pois não terá nome)

~~~java
(function main(){
    const peso = 60;
    const altura = 1,60;

    const imc = calcularImc(peso,altura);
    console.log(classificarImc(imc))

})()
~~~

# Objetos e Classes

- Objeto é uma coleção dinämica formada por chave e valores. Chamamos o valor pela sintaxe "nome.chave" ou o conjunto todo pelo nome. Exemplo:

~~~java
const carol = {
    nome: 'Caroline Oliveira',
    idade: 25
};

console.log(carol.idade); //imprime os valores de uma chave especifica por acesso direto
console.log(carol['nome']); //acesso dinâmico

console.log(carol); //imprime todo o conteudo de chaves e valores

carol.altura = 1.60; //adiciona conteúdo
carol.nome = 'Caroline Osorio' // possível alterar o valor de uma chave
~~~

Obs.: Outro tipo de acesso:

~~~java
const carol = {
    nome: 'Caroline Oliveira',
    idade: 25
};

const atributo = 'idade';
console.log(carol[atributo]);
~~~

- O uso de funções (chamado método) em objetos:

~~~java
const carol = {
    nome: 'Caroline Oliveira',
    idade: 25

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`); //this é usado pra referenciar o objeto que está o método
    }
};

carol.descrever() //invocar método

carol.descrever() = function () {
        console.log(`Meu nome é ${this.nome});} // é possível sobrescrever o conteúdo da função
~~~

- Classe é uma definição do que é e suas instâncias são ocorrências daquilo. Permite definir modelos específicos a serem seguidos.

~~~java
//criação de classe
class Pessoa{ //sempre com letra maiuscula

    nome;
    idade;

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

//definindo uma instância
const victor = new Pessoa();
victor.nome = 'Victor Guerra'; //é necessário preencher os valores da chave para a ocorrência
victor.idade = 25;

console.log(victor);
~~~

Obs.: é possível utilizar o método "construct" para definir o que vai fazer quando uma instância for criada, sendo possível tanto definir valores quanto permitir adição de valores ou preparar atributos feitos por dedução (como pegar idade e dar ano de nascimento). Ex.:

~~~java
class Pet{

    nome;
    tipo;

    constructor(nome,tipo) { 
        this.nome = nome;
        this.tipo = tipo;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e sou ${this.tipo}`);
    }
}

const balerion = new Pet('Bal','cachorro'); //caso não fosse definido, sairia "undefined" no console
~~~

# Arrays e Estruturas de Repetição

- Listas é uma coleção de dados (não necessario que sejam do mesmo tipo) e são definidas por colchetes []:

~~~java
const pets = ['Padme', 'Yoda', 'Gato', 'Bal', 'Anivia'];

console.log(pets); //chama lista completa
console.log(pets[0]); //primeiro elemento é indice 0
~~~

Para adiciona e remover elementos temos que:

~~~java
pets.push('Ratinha'); //adiociona 
pets[6] = 'Puppy'; //adiciona por indice, caso o indice já estiver em uso, o valor substitui o anterior

console.log(pets); //lembrar que para ver o resultado dessas modificações é preciso imprimir no terminal!

pets.pop(); //retira o ultimo elemento da lista
pets.shift(); //retira o primeiro elemento da lista

~~~

Lenght permite ver o tamanho de uma lista:

~~~java
console.log(pets.lenght); //verificação do tamanho já diretamente imprimindo no terminal
~~~

- Estruturas de repetição permitem iterar sobre valores de listas. Sintaxe:


for (let variavel_de_controle = valorInicial; estrutura condicional que define se o código vai ser rodado ; incremento);

~~~java
const nome = 'Caroline Rodrigues de Oliveira';

for(let i= 0; i<nome.lenght; i++){
    const letra = nome[i];
    console.log(letra);
}
~~~

- Modo Depuração: permite executar o programa e verificar linha a linha a execução, vizualizando as alterações e compreendendo erros que estejam ocorrendo. Nesse Menu possível usar inspeção para testar partes do código.

# Importação e Exportação

- Module.exports permite exportar dados/funções de uma arquivo

Obs.: Gets (especie de input) e Print (outra forma de impressão)

# Normalize

Permite criar um padrão de estilo inicial (padrão) que irá ser usado independente de qual plataforma/navegador se utilza.