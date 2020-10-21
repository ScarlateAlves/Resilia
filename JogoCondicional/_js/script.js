var escreveNome = document.getElementById("h2-subti")
escreveNome.innerHTML = ` <h2 id="h2-subti">Você esta no mundo Coronga</h2>`

function clicar() {
    var condicao = document.getElementsByName('condicao');
    var resultado = document.querySelector("div#segundaParte");
    if (condicao[0].checked) {
        morte(resultado);
    } else if (condicao[1].checked) {
        resultado.innerHTML = ` <h2>Passou, vai pro pc e aprende a programar</h2> 

                                <h3>Fez projetos e exercicios?</h3>

                                <div class="div-campus">
                                <div class="campus">
                                <input type="radio" name="condi"  class="input-radio">
                                <label class="label-format">Sim</label>
                                </div>

                                <div class="campus">
                                <input type="radio" name="condi"  class="input-radio" >
                                <label class="label-format">Não</label>
                                </div>
                                </div>
                                <button clas="input-submit" onclick="clicar2()">Enviar</button>
                                <br>
                                `;
    }
}

function clicar2() {
    var resultado = document.querySelector('div#segundaParte');
    var condicao = document.getElementsByName('condi');

    if (condicao[0].checked) {
        resultado.innerHTML = ` <h2>Criou portifolio, fez case de entrevista e passou</h2>
                                <h3>Você ganhou!!!!!!!!!</h3> 
                                <div class="div-imagem"> <img src="_img/ganhou.gif" alt="" class="img-gif"><div>
                               
                                <button clas="input-submit" onclick="document.location.reload(true)" >Jogar de novo</button>
                               
                                <button clas="input-submit" >Sair</button>
                            
                                 `
    } else if (condicao[1].checked) {
        morte(resultado);
    }
}

function morte(resultado) {
    resultado.innerHTML = ` <h3>Você foi morto!!!!!!!</h3>
                            <div class="div-imagem"><img src="_img/tenor.gif" alt="morreu" class="img-gif"></div>
                            
                            <button clas="input-submit" onclick="document.location.reload(true)" >Voltar ao Início</button>
                     
                            <button clas="input-submit" >Sair</button>
                            
                             `;
}