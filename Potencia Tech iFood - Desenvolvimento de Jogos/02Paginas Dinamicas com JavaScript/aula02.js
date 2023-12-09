/* function quadrado(valor){
    return valor * valor;
}

console.log(quadrado(5)); */



/* Calculo IMC
function calcularImc(peso, altura){
    return peso / Math.pow(altura,2);
}

function classificarImc(imc){
    if(imc<18.5){
        console.log('Abaixo do peso');
    } else if(imc >= 18.5 && imc <= 25){
        console.log('Peso normal');
    } else if(imc > 25 && imc <= 30){
        console.log('Acima do peso');
    } else if(im > 30 && imc <= 40){
        console.log('Obeso');
    } else{
        console.log('Obesidade grave');
    }
}

(function main(){
    const peso = 60;
    const altura = 1.60;

    const imc = calcularImc(peso,altura);
    console.log(classificarImc(imc))

})()*/



/* Algoritmo que escreve o nome
function escrevaNome(nome){ //geralmente o nome da função vai ter um nome que referencia a ação que vai fazer
    console.log('Meu nome é '+ nome);
}

escrevaNome('Carol'); //não esquecer das aspas, pois se não dá erro de não declaração, pois é uma variável
*/



/* Algoritmo para verificar se é maior de idade
function verificarIdade(idade){
    if(idade>=18){
        console.log('É maior de idade');
    } else{
        console.log('É menor de idade');
    }
}

verificarIdade(30);*/



/* Concatenar funçoes:
function escrevaNome(nome){
    return 'Meu nome é '+nome;
}

function verificarIdade(idade){
    if(idade>=18){
        console.log(escrevaNome('Carol')+' e sou maior de idade');
    } else{
        console.log(escrevaNome('Carol')+' e sou menor de idade');
    }
}

verificarIdade(15)*/



/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento de condição de pagamento
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código condição de pagamento:
1- à vista débito, recebe 10% de desconto
2- à vista no dinheiro e no pix, recebe 15% de desconto
3- em duas vezes, preço da etiqueta sem juros
4- acima de duas vezes, preço normal + 10% de juros*/

function desconto(valor,desconto){
    return (valor * (1-desconto));
}

function juros(valor){
    return (valor * 1.1);
}

function main(preco,pagamento){
    const precoEtiqueta = preco;
    const tipoPagamento = pagamento;

    if(tipoPagamento === 3){
        console.log('O valor a ser pago é R$ ' + precoEtiqueta.toFixed(2));
    }else if(tipoPagamento === 1){
        console.log('O valor a ser pago é R$ ' + desconto(precoEtiqueta,0.1).toFixed(2));
    }else if(tipoPagamento === 2){
        console.log('O valor a ser pago é R$ ' + desconto(precoEtiqueta,0.15).toFixed(2));
    }else{
        console.log('O valor a ser pago é R$ ' + juros(precoEtiqueta).toFixed(2));
    }
}

main(300,2)