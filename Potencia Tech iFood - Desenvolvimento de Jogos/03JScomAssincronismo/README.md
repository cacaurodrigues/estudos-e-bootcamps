# Variaveis e Escopo

1. Variaveis
O JS é uma linguagem case sensitive e fracamente tipado. O JS consegue alterar automáticamente os tipos para adequar e resolver o que foi pedido.

~~~html
var var1= 1;
var var2= 'teste';

console.log(var1+var2); //entende que não é possivel operação aritmetica, concatena os valores
~~~

2. Hoisting (issamento)
Em linguagens proceduraism, a ordem importa. No JS, a ordem que as declarações são feitas são influenciadas pelos hoisting, de forma que a ordem importa menos. Atenção: o hoisting não joga a atribuição para cima.

3. Var, let e cosnt
O "var" tem a caracteristica de vazar escopo (exceto escopo de função) por causa do hoisting. O let e o const se restringe a qualquer tipo de bloco.

4. 


# Tipos de Dados
- boolean

- null (ausência de valor, mas não a inexistência de propriedade)

- undefined (ausência de declaração)

- number

- string

- symbol (unico, imutável)

- objetos

# Orientação a protótipo
Em Js, protótipo é a base que se baseia um objeto de forma que quando diz-se que algo é o protótipo de um elemento, esse elemento herda seus atributos.

~~~java
const pessoa{
    genero: 'masculino'
}

const renar = {
    nome:'Renan',
    idade: 30,
    __proto__: pessoa
}
~~~



