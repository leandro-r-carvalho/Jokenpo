const nome = document.getElementById("nome");
const p1Nome = document.querySelector(".p1Nome");

function nomePlayer() {
    p1Nome.textContent = (nome.value);
}

//pegando a informação de melhorDe
const melhorDe = document.getElementById("melhorDe");
//Salvando a qtde de tentativas na variavel
var numTentativas=0;
function numeroTentativa() {
    numTentativas = Number(melhorDe.value);
    iniciarJogo();
}

const fraseInicio = document.querySelector(".escolha");
const jokenpoInicio = document.querySelector(".jokenpo");
function iniciarJogo(){
    fraseInicio.style.display = "block";
    jokenpoInicio.style.display = "flex";
}

//pegar a informação de qual imagem foi clicada
var opcaoPlayer = -1;
var opcaoCom = -1;
jokenpo = ["Pedra", "Papel", "Tesoura"];
imgJokenpo = ["imagens/pedra.png", "imagens/papel.png", "imagens/tesoura.png"];

//Alterar a imagem conforme escolhido pelo Player
function escolhaPlayer1(opcao) {
    opcaoPlayer = opcao;
    document.querySelector("#escolhaP1").src = imgJokenpo[opcao];
    escolhaComputador();
    vencedor(opcaoPlayer, opcaoCom);
}

//atribuir a imagem ao computador de acordo com o numero gerado
function escolhaComputador() {
    //criar um numero randomico para o computador
    opcaoCom = Math.floor(Math.random() * 3);
    document.querySelector("#escolhaCom").src = imgJokenpo[opcaoCom];
}

//Verificar vencedor
const res = document.querySelector(".res");
var placarP1=0, placarPC=0;
function vencedor(p1, com) {
    switch(com) {
        case 0:
            if (p1 == 0) {
                res.textContent = ("Deu empate...");
            } else {
                if (p1 == 1){
                    res.textContent = ("Você venceu essa partida!");
                    placarP1++;
                } else {
                    res.textContent = ("Computador venceu a partida...");
                    placarPC++;
                }
            }
            atualizarPlacar(placarP1, placarPC);
            break;
        case 1:
            if (p1 == 1) {
                res.textContent = ("Deu empate...");
            } else {
                if (p1 == 2){
                    res.textContent = ("Você venceu essa partida");
                    placarP1++;
                } else {
                    res.textContent = ("Computador venceu a partida...");
                    placarPC++;
                }
            }
            atualizarPlacar(placarP1, placarPC);
            break;
        case 2:
            if (p1 == 2) {
                res.textContent = ("Deu empate...");
            } else {
                if (p1 == 0){
                    res.textContent = ("Você venceu essa partida");
                    placarP1++;
                } else {
                    res.textContent = ("Computador venceu a partida...");
                    placarPC++;
                }
            }
            atualizarPlacar(placarP1, placarPC);
            break;
    }
}

//Anotando o placar do jogo
const p1Res = document.querySelector(".p1Res");
const comRes = document.querySelector(".comRes");
const vencedorFinal = document.querySelector("#vencedorFinal");
const proximoJogo = document.getElementById("proximoJogo");
const btnNovoJogo = document.querySelector("#novoJogo");

function atualizarPlacar(placar1, placar2){
    p1Res.textContent = placar1;
    comRes.textContent = placar2;
    if (placar1 == numTentativas){
        vencedorFinal.innerHTML =`Você venceu a melhor de ${numTentativas} pelo placar de ${placar1} x ${placar2}`
        fraseInicio.style.display = "none";
        jokenpoInicio.style.display = "none"
        proximoJogo.style.display = "block";
        btnNovoJogo.style.display = "block";
        //alert(`Você venceu a melhor de ${numTentativas}`);
    }
    if (placar2 == numTentativas){
        vencedorFinal.innerHTML =`O computador venceu a melhor de ${numTentativas} pelo placar de ${placar1} x ${placar2}`
        fraseInicio.style.display = "none";
        jokenpoInicio.style.display = "none"
        proximoJogo.style.display = "block";
        btnNovoJogo.style.display = "block";
        //alert(`O computador venceu a melhor de ${numTentativas}`);
    }
    
}

//Configurar o botão novo Jogo
function novoJogo() {
    //Limpando o nome no input e Nome player
    nome.value = "";
    p1Nome.innerHTML = "Player1";
    //Limpando opção MelhorDe
    melhorDe.value = "Selecione";
    //Escondendo itens novamente
    proximoJogo.style.display = "none";
    btnNovoJogo.style.display = "none";
    //Voltando os itens iniciais de escolha
    document.querySelector("#escolhaP1").src = "imagens/jokenpo.png";
    document.querySelector("#escolhaCom").src = "imagens/jokenpo.png";
    //Zerando o resultado e placar
    res.innerHTML = "";
    p1Res.textContent = 0;
    comRes.textContent = 0;
    //Atualizando as frases iniciais
    vencedorFinal.innerHTML ="Preparando para uma emocionante partida de JO-KEN-PÔ";  
}
btnNovoJogo.addEventListener("click", novoJogo)