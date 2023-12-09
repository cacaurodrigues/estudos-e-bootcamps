/*/classe
class Pessoa{

    nome;
    idade;

    constructor() { //constructor permite definir o que acontece quando uma instância é criada sem adicionar valores
        this.nome = 'teste';
        this.idade = 18;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

//instância
const victor = new Pessoa();
victor.nome = 'Victor Guerra';
victor.idade = 25;

const rodrigo = new Pessoa();

victor.descrever();
rodrigo.descrever();*/

/*class Pessoa{

    nome;
    idade;
    anoNasce;

    constructor(nome,idade) { //constructor permite definir o que acontece quando uma instância é criada sem adicionar valores
        this.nome = nome;
        this.idade = idade;
        this.anoNasce = 2023 - this.idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}, nasci em ${this.anoNasce}`);
    }
}

function compararPessoa(p1,p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}, pois nasceu em ${p1.anoNasce}.`);
    } else if (p1.idade === p2.idade){
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade, ambos nasceram em , pois nasceu em ${p2.anoNasce}.`);
    } else{
        console.log(`${p2.nome} é mais velho que ${p1.nome}, pois nasceu em ${p2.anoNasce}.`);
    }
}

const victor = new Pessoa('Victor Rodrigues', 25);
const rodrigo = new Pessoa ('Rodrigo Osorio', 28);

compararPessoa(victor, rodrigo);*/



/* Classe que represente carro:
- marca
- cor
-gasto médio por KM
Criar método para definir o valor gasto para fazer um percurso de x km com um preco y de combustivel

class Carro{

    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio) { 
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    gastoNoPercurso(km,precoCombustivel) {
        return km * this.gastoMedio * precoCombustivel;
    }
}

const uno = new Carro ('Fiat', 'cinza', 1/12); //12km por litro, ou seja 1litro pra 12 km

console.log(uno.gastoNoPercurso(70, 5));*/



/* Classe para representar pessoas com os atributos: nome, peso, altura
Metodo para calcular IMC
Criar instancia: José de 70kg e 1,75
class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(peso,altura){
        return this.peso / Math.pow(this.altura,2);
    }
    
    classificarImc(){
        const imc = this.calcularImc();

        if(imc<18.5){
            console.log(`${this.nome} tem imc ${imc.toFixed(0)} e está abaixo do peso`);
        } else if(imc >= 18.5 && imc <= 25){
            console.log(`${this.nome} tem imc ${imc.toFixed(0)} e está com o peso normal`);
        } else if(imc > 25 && imc <= 30){
            console.log(`${this.nome} tem imc ${imc.toFixed(0)} e está acima do peso`);
        } else if(im > 30 && imc <= 40){
            console.log(`${this.nome} tem imc ${imc.toFixed(0)} e está obeso`);
        } else{
            console.log(`${this.nome} tem imc ${imc.toFixed(0)} e está com obesidade grave`);
        }
    }
}

const jose = new Pessoa ('José', 70, 1.75);

jose.classificarImc();*/

/*class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Nome: ${this.nome}; Idade: ${this.idade};`);
    }
}

new Pessoa('Renan', 30).descrever(); */

/*class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
new Pessoa('Renan', 30) // outra forma de declara */

