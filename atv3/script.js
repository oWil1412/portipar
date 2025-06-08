document.querySelector("#gerar").addEventListener("click", function() {
  const numero = parseInt(document.querySelector("#numero").value);
  const tabuadaDiv = document.querySelector("#tabuada");

  if (isNaN(numero)) {
    tabuadaDiv.innerHTML = "Por favor, digite um número válido.";
    return;
  }

  let resultado = "";
  for (let i = 1; i <= 10; i++) {
    resultado += `${numero} x ${i} = ${numero * i}\n`;
  }

  tabuadaDiv.innerHTML = resultado;
});
