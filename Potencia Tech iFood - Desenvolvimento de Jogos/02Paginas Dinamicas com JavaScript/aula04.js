/* Criar programa que imprima dado um número:

const numero = 4;

for (let i = 1; i <= 10; i++) {
    console.log(i*numero)  
}*/

/* Programa capaz de percorrer lista de numeros e imprima cada numero par encontrado */

const numeros = [1, 27, 36, 44, 59, 68, 73, 82, 90, 10];

for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    
    if(element % 2 === 0){
        console.log(element)
    }
}