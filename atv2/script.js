document.getElementById("calcular").addEventListener("click", function() {
  const n1 = parseFloat(document.getElementById("nota1").value);
  const n2 = parseFloat(document.getElementById("nota2").value);
  const n3 = parseFloat(document.getElementById("nota3").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    resultado.textContent = "Por favor, preencha todas as notas corretamente.";
    return;
  }

  const media = (n1 + n2 + n3) / 3;
  let situacao = "";

  if (media >= 7) {
    situacao = "Aprovado";
  } else if (media >= 5) {
    situacao = "Em Exame";
  } else {
    situacao = "Reprovado";
  }

  resultado.textContent = `Média: ${media.toFixed(2)} - Situação: ${situacao}`;
});
