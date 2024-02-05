// função que atuailza a palavra oculta

function atualizarPalavraOculta(palavraOculta,
    letraDigitada, palavraEscolhida) {
    // converte a palavra oculta em um array de caracteres
    let palavraOcultaArray = palavraOculta.split("");

    // loop que continua até o tamanho final da palavra escolhida
    for (let i = 0; i < palavraEscolhida.length; i++) {

        // Verifica se cada letra da palavra escolhida e igual a
        // letra digitada
        if (palavraEscolhida[i] === letraDigitada) {
            // substitui a letra na posição i
            palavraOcultaArray[i] = letraDigitada
        }

    }

    // Retorna o array de caracteres convertido em uma string
    return palavraOcultaArray.join('')
}


// Verifica se o comprimento da string é 1 e se a
// letra está no intervalo de 'a' a 'z'.
function validarLetraDigitada(letraDigitada) {
    return letraDigitada.length === 1 && letraDigitada.match(/[a-z]/);
}

// Verifica se a palavra oculta é igual à palavra escolhida.
function verificarJogoGanho(palavraOculta, palavraEscolhida) {
    return palavraOculta === palavraEscolhida;
}

// Verifica se a letra digitada está presente na palavra escolhida.
function verificarLetraPresenteNaPalavra(palavraEscolhida, letraDigitada) {
    return palavraEscolhida.includes(letraDigitada);
}

//quantos errros posso cometer
function jogadasRestantes(erros) {
    return 4 - erros
}

// Função verifica se o status do jogo e imprime uma mensagem 
//informando se o jogo terminou em vitoria ou derrota
function exibirMensagemFimDeJogo(statusJogo) {
    if (statusJogo === 'venceu') {
        console.log("\n--------------VOCÊ VENCEU!!-------------");
    } else {
        console.log("\n--------------VOCÊ PERDEU!!-------------");
    }
}

export {
    validarLetraDigitada,
    verificarJogoGanho,
    verificarLetraPresenteNaPalavra,
    jogadasRestantes,
    atualizarPalavraOculta,
    exibirMensagemFimDeJogo
  };