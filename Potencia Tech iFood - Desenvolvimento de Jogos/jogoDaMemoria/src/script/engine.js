const emojis = [
    "😉",
    "😉",
    "😘",
    "😘",
    "😍",
    "😍",
    "🥰",
    "🥰",
    "💗",
    "💗",
    "❤️",
    "❤️",
    "💕",
    "💕",
    "💖",
    "💖",
];

let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1)); //randomiza a posição

for(let i = 0; i < emojis.length; i++){
    let box = document.createElement("div"); //cria elemento com tag div
    box.className = "item"; //define elemento
    box.innerHTML = shuffleEmojis[i]; //define que elemento interno é o emoji shuffle
    box.onclick = handleClick; //o que fazer ao clicar
    document.querySelector(".game").appendChild(box); //coloca dentro da classe game   
}

function handleClick(){ // funcao para definir o que vai fazer ao clicar
    if(openCards.length < 2 ){
        this.classList.add("boxOpen"); // quando abrir uma carta, cololca na classe open
        openCards.push(this);
    } if(openCards.length == 2) {
        setTimeout(checkMatch, 500); //verifica se carta é igual
    }

    console.log(openCards); //terminal mostra as cartas abertas
}

function checkMatch(){ //funcao de comparacao de secartas iguais
    if(openCards[0].innerHTML === openCards[1].innerHTML){ //compara as duas cartas abertas
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch"); //se iguais, salva as cartas iguais
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen"); // vira as cartas nao iguais
    }

    openCards = []; //libera a lista de abertas

    if(document.querySelectorAll(".boxMatch").length === emojis.length){ //compara tamanho total de cartas correspondentes com quantidade delas
        alert("Parabéns, você venceu!");
    }
}

