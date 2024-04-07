let listaDeNumeros = [];
let numeroSecreto = gerarNumeroAleatorio();
let quantidadeDeTentativas = 1;

function substituirTextos(tag,texto) {
    let campos = document.querySelector(tag);
    campos.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});

}

function exibirMensagemInicial() {

substituirTextos('h1','Jogo do número da sorte');
substituirTextos('p','Escolha um número entre 1 e 10');
}

exibirMensagemInicial();
console.log(numeroSecreto)

function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = quantidadeDeTentativas == 1 ? 'tentativa' : 'tentativas';
    let mensagemTentativas = 'Paraboins, você descobriu o número! Que é ' + numeroSecreto + ' Com apenas ' + quantidadeDeTentativas + ' ' + palavraTentativa;

    if (chute == numeroSecreto) {
        substituirTextos ('h1', 'VOCÊ ACERTOU!');
        substituirTextos ('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.querySelector('input').disabled = true;
    } else {
        if (numeroSecreto > chute) {
            substituirTextos ('p', 'O número é maior do que ' + chute);
        } else {
            substituirTextos ('p', 'O número é menor do que ' + chute);
        }
        quantidadeDeTentativas++;
        limparCampo();
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
};

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeDeElementosNaLista = listaDeNumeros.length;

    if (quantidadeDeElementosNaLista == 10) {
        listaDeNumeros = [];
    }

    if (listaDeNumeros.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio()
    } else {
        listaDeNumeros.push(numeroEscolhido);
        console.log(listaDeNumeros)
        return numeroEscolhido;
    }
};

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    quantidadeDeTentativas = 1;
    console.log(numeroSecreto);
    exibirMensagemInicial();
    document.querySelector('input').disabled = false;
    document.querySelector('#reiniciar').disabled = true;
}

