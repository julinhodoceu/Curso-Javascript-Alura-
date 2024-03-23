alert('Bem vindo ao jogo de adivinhar o número')

let numeroDaSorte = 3

function chutarNumero() {

    let chute = prompt('Insira um número entre 1 e 10')

if (chute == numeroDaSorte) {
    alert('parabéns moreh, você descobriu o secret number, que é ' + numeroDaSorte)
} else {
    alert ('poxa, que penah! tente de novo')
    chutarNumero()
}
}

chutarNumero()
