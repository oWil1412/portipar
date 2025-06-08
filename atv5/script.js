function validarCPF() {
  const cpfInput = document.getElementById("cpf").value;
  const resultado = document.getElementById("resultado");

  // Remove pontos e traços
  const cpf = cpfInput.replace(/[^\d]+/g, "");

  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
    resultado.textContent = "CPF inválido";
    resultado.style.color = "red";
    return;
  }

  let soma = 0;
  let resto;

  // Valida primeiro dígito
  for (let i = 1; i <= 9; i++) {
    soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) {
    resultado.textContent = "CPF inválido";
    resultado.style.color = "red";
    return;
  }

  // Valida segundo dígito
  soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma += parseInt(cpf.charAt(i - 1)) * (12 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(10))) {
    resultado.textContent = "CPF inválido";
    resultado.style.color = "red";
    return;
  }

  resultado.textContent = "CPF válido";
  resultado.style.color = "green";
}
