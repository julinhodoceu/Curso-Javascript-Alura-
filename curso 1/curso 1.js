alert('Bem vindo ao jogo de adivinhar o número');

let numeroDaSorte = parseInt(Math.random() * 100 + 1);
let chute;
let quantidadeTentativas = 1;

function chutarNumero() {

    while (chute != numeroDaSorte) {

        chute = parseInt(prompt('Insira um número entre 1 e 100'));

        if (chute == numeroDaSorte){
            break;
        } else {
            quantidadeTentativas++;
            if (chute > numeroDaSorte) {
                alert('O número da sorte é menor do que ' + chute + '. Essa é sua ' + quantidadeTentativas + 'º Tentativa');
            } else {
                alert('O número da sorte é maior do que ' + chute + '. Essa é sua ' + quantidadeTentativas + 'º Tentativa');
            }

        }
    }
}

chutarNumero();

palavraTentativa = quantidadeTentativas > 1 ? 'tentativas' : 'tentativa'

alert('parabéns moreh, você descobriu o secret number, que é ' + numeroDaSorte + ', com apenas ' + quantidadeTentativas + ' ' + palavraTentativa);