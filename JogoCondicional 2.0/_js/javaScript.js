var botaoSim = document.getElementById('botaoSim');
var botaoNao = document.getElementById('botaoNao');
var h2 = document.querySelector('h2');
var res = document.getElementById('res');
var p = document.querySelector('p');

var pontos = parseInt(pontos)

function sim() {
    h2.innerHTML = "Parabéns, vamos começar";

    p.innerHTML = "Qual a capital do Mato Grosso?"
    botaoSim.innerText = "Cuiabá"
    botaoNao.innerText = "João Pessoa"

    botaoSim.onclick = pergunta1Sim;
    botaoNao.onclick = pergunta1Nao;
}


function pergunta1Sim() {
    pontos + 1
    h2.innerHTML = `Você acertou ganhou ${pontos} pontos`;

    p.innerHTML = "Qual o país com maior população?"
    botaoSim.innerText = "India"
    botaoNao.innerText = "China"

    botaoSim.onclick = pergunta2Sim;
    botaoNao.onclick = pergunta2Nao;

}

function pergunta1Nao() {
    nao();
}

function pergunta2Sim() {
    nao()
}

function pergunta2Nao() {
    pontos + 1
    h2.innerHTML = `Você acertou ganhou ${pontos} pontos`;

    p.innerHTML = "Onde fica a Russia?"
    botaoSim.innerText = "Africa"
    botaoNao.innerText = "Asia"

    botaoSim.onclick = pergunta3Sim;
    botaoNao.onclick = pergunta3Nao;

}

function pergunta3Sim() {
    nao()

}

function pergunta3Nao() {
    res.innerText = "Parabens acertou todas"
}


function nao() {
    h2.innerHTML = `O garibaldo te matou`
    res.innerHTML = `<img src="_img/morte.gif" alt="">`
}