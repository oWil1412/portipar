function verResultado() {
      var pontos = 0;

      var q1 = document.querySelector('input[name="q1"]:checked');
      var q2 = document.querySelector('input[name="q2"]:checked');
      var q3 = document.querySelector('input[name="q3"]:checked');

      if (q1) pontos += Number(q1.value);
      if (q2) pontos += Number(q2.value);
      if (q3) pontos += Number(q3.value);

      document.getElementById("resultado").innerText = "Você acertou " + pontos + " de 3 perguntas.";
    }