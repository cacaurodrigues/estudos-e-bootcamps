/* console.log('Olá, Mundo!') */



/* Programa para calcular valor de uma viagem:
3 variáveis:
- preço do combustivel;
- gasto medio do combustivel do carro por km;
- distancia em km da viagem;

const precoCombustivel = 5.79;
const kmLitro = 12;
const distanciaKm= 15800;

const litroConsumido = distanciaKm/kmLitro;
const valor = litroConsumido * precoCombustivel;

console.log(valor.toFixed(2)); /*fixed recebe frações e retorna um valor arredondado, no caso 2 casa*/



/* uso de boolean
const numero = 0;
const par = numero % 2 === 0;

if(par){
    console.log('É par');
}
if(!par){
    console.log('Não é par');
}
else{
    console.log('Não é par');
} */



/* faça um programa para calcular o valor de uma viagem

5 variáveis:
1. preço do etanol
2. preço da gasolina
3. tipo de combustivel do carro
4. gasto merdio de combustivel do carro por Km
5. distancia em KM da viagem

imprima o valor que será gasto para realizar a viagem


const precoGasolina = 6.66;
const precoEtanol = 5.79;

const combustivel = 'gasolina';

const kmLitro = 10;
const distanciaKm= 100;

if(combustivel === 'gasolina'){
    const litroConsumido = distanciaKm/kmLitro;
    const valor = litroConsumido * precoGasolina;
    console.log(valor.toFixed(2));    
} else {
    const litroConsumido = distanciaKm/kmLitro;
    const valor = litroConsumido * precoEtanol;
    console.log(valor.toFixed(2));  
}*/



/* algoritmo recebe 3 notas por aluno em um semestre e calcula media e classificação conforme tabela, imprimindo resultado

media = (nota 1 + nota 2 + nota 3) /3;

classificacao:
- media menor 5: reprovaçao;
- media entre 5 e 7: recupoeracao;
- media >7: passou;

const nota1 = 4;
const nota2 = 4;
const nota3 = 5;

const media = (nota1 + nota2 + nota3)/3;

if(media>7){
    console.log('Aluno está aprovado.');
} else if(media >= 5 && media <= 7){
    console.log('Aluno em recuperação');
} else {
    console.log('Aluno reprovado');
} */



/* algoritmo para calcular IMC

formula IMC = peso / (altura*altura)

Classificação
- Abaixo de 18.5 = Abaixo do peso
- Entre 18.5 e 25 = Peso Normal
- Entre 25 e 30 = Acima do Peso
- Entre 30 e 40 = obeso
- Acima de 40 = obesidade grave
const peso = 60;
const altura = 1.60;

const imc = peso / (altura * altura);

quadrado pode ser feito por "Math.pw(altura,2)" , sendo Math uma biblioteca seria so colocar no lugar de altura*altura

console.log(imc.toFixed(2));

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
}*/



/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento de condição de pagamento
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código condição de pagamento:
1- à vista débito, recebe 10% de desconto
2- à vista no dinheiro e no pix, recebe 15% de desconto
3- em duas vezes, preço da etiqueta sem juros
4- acima de duas vezes, preço normal + 10% de juros*/

const precoEtiqueta = 100;
const descontoDebito = 0.1;
const descontoDinheiroPix = 0.15;
const juros = 1.1;

const tipoPagamento = 3;

console.log('O valor a ser pago é:');

if(tipoPagamento===3){
    console.log(precoEtiqueta);
}else if(tipoPagamento===1){
    const valorFinal = precoEtiqueta - (precoEtiqueta * descontoDebito);
    console.log(valorFinal);
}else if(tipoPagamento===2){
    const valorFinal = precoEtiqueta - (precoEtiqueta * descontoDinheiroPix);
    console.log(valorFinal);
}else{
    const valorFinal = precoEtiqueta * juros;
    console.log(valorFinal);
}