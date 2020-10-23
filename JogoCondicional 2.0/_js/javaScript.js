var h2 = document.getElementById('h2')
var res = document.getElementById('res');
var p = document.getElementById('p')
var resposta1 = document.getElementById('resposta1');
var resposta2 = document.getElementById('resposta2');
var resposta3 = document.getElementById('resposta3');
var resposta4 = document.getElementById('resposta4');

resposta1.onclick = errada;
resposta2.onclick = errada;
resposta3.onclick = pergunta2;
resposta4.onclick = errada;

function pergunta2() {
    conteudo(h2, "QUAL FOI O ANO DE DEBUT?", resposta1, resposta2, resposta3, resposta4, "2012", "2013", "2014", "2015", pergunta2)
    resposta1.onclick = errada;
    resposta2.onclick = pergunta3;
    resposta3.onclick = errada
    resposta4.onclick = errada;
}

function pergunta3() {
    conteudo(h2, `QUAL INTEGRANTE TEM COMO PELUCIA? <br> <img src="_img/pelucia.jpg" alt="">`, resposta1, resposta2, resposta3, resposta4, "RM", "JIN", "JIMIM", "V")
    resposta1.onclick = errada;
    resposta2.onclick = errada;
    resposta3.onclick = pergunta4;
    resposta4.onclick = errada;
}

function pergunta4() {
    conteudo(h2, "QUAL A IDADE DO MEMBRO MAIS NOVO?", resposta1, resposta2, resposta3, resposta4, "22", "23", "24", "25")

    resposta1.onclick = errada;
    resposta2.onclick = errada;
    resposta3.onclick = pergunta5;
    resposta4.onclick = errada;
}

function pergunta5() {
    conteudo(h2, "QUAL DOS INTEGRANTES CONSEGUE FAZER DE TUDO?",
        resposta1, resposta2, resposta3, resposta4,
        `<img src="_img/HOUPE.webp" class="imagem">`,
        `<img src="_img/SUGA.webp" class="imagem">`,
        `<img src="_img/KOOK.webp"  class="imagem">`,
        `<img src="_img/JIN.webp"  class="imagem">`)
    resposta1.onclick = errada
    resposta2.onclick = errada
    resposta3.onclick = certa;
    resposta4.onclick = errada
}
//funcoes separadas

function errada() {
    h2.innerHTML = "Você perdeu!!!"
    res.innerHTML = `<img src="_img/KOOKCHORA.gif" alt="">  <br>  <button onclick="document.location.reload(true)">Jogar de novo</button>`;
}

function certa() {
    h2.innerHTML = "Você ganhou!!!!!!!!!!!!!!"
    res.innerHTML = `<img src="_img/MENINOSCORACAO.gif" alt=""> <br>  <button onclick="document.location.reload(true)">Jogar de novo</button>`
}

function conteudo(h2, cont, resposta1, resposta2, resposta3, resposta4, botao1, botao2, botao3, botao4) {
    h2.innerHTML = cont;
    resposta1.innerHTML = botao1
    resposta2.innerHTML = botao2
    resposta3.innerHTML = botao3
    resposta4.innerHTML = botao4
}