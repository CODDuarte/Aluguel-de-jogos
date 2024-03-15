let totalAlugados = 0;

function ContarJogosAlugados() {
    console.log(`Total de jogos alugados ${totalAlugados}`);
    
}

function alterarStatus(Id) {
    let clicBotao = document.getElementById(`game-${Id}`);
    let imagem = clicBotao.querySelector('.dashboard__item__img'); 
    let botao = clicBotao.querySelector('.dashboard__item__button'); 
    let nomeDoJogo = clicBotao.querySelector('.dashboard__item__name');
   
     
    if (imagem.classList.contains('dashboard__item__img--rented')) { 
        if(confirm(`Você tem certeza que deseja devolver o jogo ${nomeDoJogo.innerHTML} ?`)) {
        imagem.classList.remove('dashboard__item__img--rented'); 
        botao.innerHTML = 'Alugar'; 
        botao.classList.add('dashboard__item__button'); 
        alert('Jogo Devolvido!');
        totalAlugados--;
        
        }

    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.innerHTML = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
       totalAlugados++;

    }

    totalAlugados();
}

 document.addEventListener('DOMContentLoaded', function(){
    totalAlugados = this.document.querySelectorAll('.dashboard__item__img--rented').length;

    totalAlugados();
 });


// Se dentro do elemento imagem conter o elemento classe rented, remova esse elemento.
// Adiciona a palavra alugar e remove o elemento classe return do botão.
// Se não, 
//executa o bloco else adicionando o elemento rented, adicona a palavra devolver e o 
// elemento clase no botao.

essaPalavraEUmPalindromo();

function essaPalavraEUmPalindromo() {
    let palavra = 'Arvore';
    let separandoAsLetrasDaPalavra = palavra.toLowerCase().split('');
    let palavraInvertida = separandoAsLetrasDaPalavra.slice().reverse().join('');
   

    if (palavra.toLowerCase() === palavraInvertida) {
        console.log('A palavra ' + palavra + ' é um palíndromo!');
    } else {
        console.log('A palavra ' + palavra + ' não é um palíndromo!');
    }
}

