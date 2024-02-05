import entradaDados from "readline-sync";
import listaDeFrutas from "./dados/dados.js";
import {
    validarLetraDigitada,
    verificarJogoGanho,
    verificarLetraPresenteNaPalavra,
    jogadasRestantes,
    atualizarPalavraOculta,
    exibirMensagemFimDeJogo,
} from "./funcoes/funcoes.js";

// Função principal do jogo
function jogarForca() {

    // Escolhe aleatoriamente uma palavra da lista
    const palavraEscolhida = listaDeFrutas[Math.floor(
        Math.random() * listaDeFrutas.length)];


    // Obtém a primeira letra da palavra escolhida.
    let primeiraLetra = palavraEscolhida[0];

    // Cria uma string de underline (_) repetida para cobrir o comprimento da palavra escolhida, exceto a primeira letra.
    let underline = "_".repeat(palavraEscolhida.length - 1);

    // Combina a primeira letra e a string de underline para formar a palavra oculta.
    let palavraOculta = primeiraLetra + underline;


    let erros = 0;
    // Jogo inicia com o status 'andamento'
    let statusJogo = 'andamento'


    console.log(`------------JOGO DA FORCA------------`);
    console.log(`\nNome da fruta com ${palavraEscolhida.length} letras:`);

    // Loop continua enquanto o status do jogo estiver em 'andamento'
    while (statusJogo === 'andamento') {   console.log(`\nFruta: ${palavraOculta}`);

    // Recebe a letra digitada pelo usuário aceitando tanto maiuscula quanto minuscula
    const letraDigitada = entradaDados.question("Digite uma letra: ").toLowerCase();

    if (validarLetraDigitada(letraDigitada)) {
      if (verificarLetraPresenteNaPalavra(palavraEscolhida, letraDigitada)) {
        palavraOculta = atualizarPalavraOculta(palavraOculta, letraDigitada, palavraEscolhida);
        if (verificarJogoGanho(palavraOculta, palavraEscolhida)) {
          statusJogo = 'venceu'
        }
      } else {
        erros++

        const chances = jogadasRestantes(erros)

        if(chances > 0) { //
          console.log(`OPÇÃO ERRADA! Você ainda tem ${chances} chance(s)!`);
        } else {
          statusJogo = 'perdeu' // Atualiza o status do jogo para 'perdeu' em caso de erros igual a 4
        }
      }
    } else {
      console.log("\nPor favor, digite uma letra válida.");
    }
  }
  // Consumindo função que exibe uma mensagem de vitoria ou derrota
  exibirMensagemFimDeJogo(statusJogo);

}

jogarForca(); // Inicia o jogo


