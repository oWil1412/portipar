document.getElementById("form-imc").addEventListener("submit", function(e) {
  e.preventDefault();
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const resultado = document.getElementById("resultado");
  const indicador = document.getElementById("indicador");

  resultado.className = "";
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    resultado.textContent = "Por favor, insira valores válidos.";
    indicador.style.left = "0%";
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = "";
  let classe = "";
  let pos = 0;

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
    classe = "abaixo";
    pos = (imc / 18.5) * 25;
  } else if (imc < 25) {
    classificacao = "Peso normal";
    classe = "normal";
    pos = 25 + ((imc - 18.5) / (25 - 18.5)) * 25;
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
    classe = "sobrepeso";
    pos = 50 + ((imc - 25) / (30 - 25)) * 25;
  } else {
    classificacao = "Obesidade";
    classe = "obesidade";
    pos = 75 + Math.min(((imc - 30) / 10) * 25, 25);
  }

  resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
  resultado.className = classe;
  indicador.style.left = `${Math.min(pos, 98)}%`;
});