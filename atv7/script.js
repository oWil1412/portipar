const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function verificarPalpite() {
  const palpite = parseInt(document.getElementById('palpite').value, 10);
  const mensagem = document.getElementById('mensagem');
  const tentativasTexto = document.getElementById('tentativas');
  tentativas++;

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    mensagem.textContent = "Digite um número válido entre 1 e 100.";
    mensagem.style.color = "red";
  } else if (palpite < numeroSecreto) {
    mensagem.textContent = "O número é maior!";
    mensagem.style.color = "lightblue";
  } else if (palpite > numeroSecreto) {
    mensagem.textContent = "O número é menor!";
    mensagem.style.color = "lightblue";
  } else {
    mensagem.textContent = `🎉 Parabéns! Você acertou o número ${numeroSecreto}!`;
    mensagem.style.color = "lime";
    document.getElementById('palpite').disabled = true;
  }

  tentativasTexto.textContent = `Tentativas: ${tentativas}`;
  document.getElementById('palpite').value = '';
  document.getElementById('palpite').focus();
}
