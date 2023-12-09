const entradas = [105, 50, 10, 98, 23, 92, 124, 321]; //conjunto de teste
let i = 0; //let pois muda

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto)
}

/* module.exports = {
    gets:gets, //caso fossem nomes diferentes e formato antigo, seria assim
    print: print
};*/

module.exports = {gets,  print};

