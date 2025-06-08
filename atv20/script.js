const tabuleiro = document.getElementById('tabuleiro');
const mensagem = document.getElementById('mensagem');
const simbolos = ['🦍','🐒','🧠','🎱','🚗','🧬','🌚','🫏'];
let cartas = [...simbolos, ...simbolos];
function embaralhar(array){
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random()* (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
cartas = embaralhar(cartas);
let primeiraCarta = null;
let segundaCarta = null;
let bloqueado = false;
let paresEncontrados = 0;
function criarCarta(simbolo, index){
    const carta = document.createElement("div");
    carta.classList.add("carta");
    carta.dataset.simbolo = simbolo;
    carta.dataset.index = index;

    const cartaInner = document.createElement("div");
    cartaInner.classList.add("carta-inner");

    const frente = document.createElement("div");
    frente.classList.add("frente");

    const verso = document.createElement("div");
    verso.classList.add("verso");
    verso.textContent = simbolo;

    cartaInner.appendChild(frente);
    cartaInner.appendChild(verso);
    carta.appendChild(cartaInner);

    carta.addEventListener("click", () => virarCarta(carta));

    return carta;
}

function virarCarta(carta){
  if(bloqueado) return;
  if(carta === primeiraCarta) return;
  if(carta.classList.contains("flipped")) return;
  
  carta.classList.add("flipped");

  if(!primeiraCarta){
    primeiraCarta = carta;
    return;
  }
  segundaCarta = carta;
  bloqueado = true;
  if (primeiraCarta.dataset.simbolo === segundaCarta.dataset.simbolo) {
    paresEncontrados++;
    primeiraCarta = null;
    segundaCarta = null;
    bloqueado = false;
    if (paresEncontrados === simbolos.length) {
      mensagem.textContent = 'Parabéns! Você encontrou todos os pares!';
    }
  }else {
    // Se não forem iguais, vira de volta após 1 segundo
    setTimeout(() => {
      primeiraCarta.classList.remove('flipped');
      segundaCarta.classList.remove('flipped');
      primeiraCarta = null;
      segundaCarta = null;
      bloqueado = false;
    }, 1000);
  } 
}
function iniciarJogo(){
  paresEncontrados = 0;
  mensagem.textContent = '';
  tabuleiro.innerHTML = '';
  cartas = embaralhar([...simbolos, ...simbolos]);
  cartas.forEach((simbolo, index) => {
    const carta = criarCarta(simbolo, index);
    tabuleiro.appendChild(carta);
  });
}
iniciarJogo();