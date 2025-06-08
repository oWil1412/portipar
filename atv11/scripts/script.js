function sacar() {
      var valor = Number(document.getElementById("valor").value);
      var resultado = "";

      if (valor < 2) {
        resultado = "Valor inválido para saque (mínimo R$2).";
      } else {
        var notas = [100, 50, 20, 10, 5, 2];

        for (var i = 0; i < notas.length; i++) {
          var qtd = Math.floor(valor / notas[i]);
          if (qtd > 0) {
            resultado += "Notas de R$" + notas[i] + ": " + qtd + "<br>";
            valor = valor % notas[i];
          }
        }

        if (valor > 0) {
          resultado += "Valor restante não pode ser sacado: R$" + valor;
        }
      }

      document.getElementById("resultado").innerHTML = resultado;
    }