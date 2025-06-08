function verificar() {
    const n = Number(document.getElementById("num").value);
    let primo = n > 1;
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        primo = false;
      }
    }
    document.getElementById("resultado").innerText = primo ? "É primo!" : "Não é primo.";
  }