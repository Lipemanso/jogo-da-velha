var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrado = document.getElementsByClassName('quadrado');
var opcaoJogador = prompt("Escolha seu jogador: x ou o");

mudarJogador(opcaoJogador);

function clicarQuadrado(id){
    if(vencedor !== null){
        return;
    }
    var quadrado = document.getElementById(id);
    if(quadrado.innerHTML !== '-'){
        return;
    }
    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';
    if(jogador == 'x' || jogador == 'X'){
        jogador = 'o';
    }else if(jogador == 'o' || jogador == 'O'){
        jogador = 'x';
    }else{
        return prompt("Jogador inválido!");
        
    }
    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor(){
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);
    
    if(checaSequencia(quadrado1,quadrado2,quadrado3)){
        corVencedor(quadrado1,quadrado2,quadrado3);
        mudarVencedor(quadrado1);
        return;
    }
    if(checaSequencia(quadrado4,quadrado5,quadrado6)){
        corVencedor(quadrado4,quadrado5,quadrado6);
        mudarVencedor(quadrado4);
        return;
    }
    if(checaSequencia(quadrado7,quadrado8,quadrado9)){
        corVencedor(quadrado7,quadrado8,quadrado9);
        mudarVencedor(quadrado1);
        return;
    }
    if(checaSequencia(quadrado1,quadrado4,quadrado7)){
        corVencedor(quadrado1,quadrado4,quadrado7);
        mudarVencedor(quadrado1);
        return;
    }
    if(checaSequencia(quadrado2,quadrado5,quadrado8)){
        corVencedor(quadrado2,quadrado5,quadrado8);
        mudarVencedor(quadrado2);
        return;
    }
    if(checaSequencia(quadrado3,quadrado6,quadrado9)){
        corVencedor(quadrado3,quadrado6,quadrado9);
        mudarVencedor(quadrado3);
        return;
    }
    if(checaSequencia(quadrado1,quadrado5,quadrado9)){
        corVencedor(quadrado1,quadrado5,quadrado9);
        mudarVencedor(quadrado1);
        return;
    }
    if(checaSequencia(quadrado3,quadrado5,quadrado7)){
        corVencedor(quadrado3,quadrado5,quadrado7);
        mudarVencedor(quadrado3);
        
    }
  
}


function corVencedor(quadrado1,quadrado2,quadrado3){
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function checaSequencia(quadrado1,quadrado2,quadrado3){
    var sequenciaIgual = false;
    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        sequenciaIgual = true;
    }
    return sequenciaIgual;
}

function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = "";
    var opcaoJogador = prompt("Escolha seu jogador: x ou o");
    for(let i = 1; i <= 9; i++){
        quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-'; 
        mudarJogador(opcaoJogador);

    }
}