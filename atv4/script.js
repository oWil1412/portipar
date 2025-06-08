document.getElementById("converter").addEventListener("click", function() {
  const valor = parseFloat(document.getElementById("temperatura").value);
  const tipo = document.querySelector('input[name="tipo"]:checked').value;
  const resultado = document.getElementById("resultado");

  if (isNaN(valor)) {
    resultado.textContent = "Digite um valor de temperatura válido.";
    return;
  }

  let convertido = 0;
  let mensagem = "";

  if (tipo === "CtoF") {
    convertido = (valor * 9/5) + 32;
    mensagem = `${valor}°C = ${convertido.toFixed(2)}°F`;
  } else {
    convertido = (valor - 32) * 5/9;
    mensagem = `${valor}°F = ${convertido.toFixed(2)}°C`;
  }

  resultado.textContent = mensagem;
});
