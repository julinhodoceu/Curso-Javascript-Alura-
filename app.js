/* alert('Bem vindo ao jogo de adivinhar o número');

let numeroDaSorte = 3;
let chute;
let quantidadeTentativas = 1;

function chutarNumero() {

    while (chute != numeroDaSorte) {

        chute = parseInt(prompt('Insira um número entre 1 e 10'));

        if (chute == numeroDaSorte && quantidadeTentativas != 1) {
            alert('parabéns moreh, você descobriu o secret number, que é ' + numeroDaSorte + ', com apenas ' + quantidadeTentativas + ' tentativas');

        } else if (chute == numeroDaSorte && quantidadeTentativas === 1) {
            alert('parabéns moreh, você descobriu o secret number, que é ' + numeroDaSorte + ', com apenas ' + quantidadeTentativas + ' tentativa');

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

*/

let contador = 0;

while (contador < 11) {
    console.log(contador)
    contador++;
}