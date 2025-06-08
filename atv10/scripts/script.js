var nomes = [];
var contador = 0;

    function adicionar() {
      var nome = document.getElementById("nomeInput").value;
      if (nome !== "") {
        nomes[contador] = nome;
        contador++;

        var lista = document.getElementById("lista");
        lista.innerHTML += "<div>" + nome + "</div>";

        document.getElementById("nomeInput").value = "";
      }
    }

    function sortear() {
      if (nomes.length > 0) {
        var sorteado = nomes[Math.floor(Math.random() * nomes.length)];
        document.getElementById("resultado").innerText = "Nome sorteado: " + sorteado;
      } else {
        document.getElementById("resultado").innerText = "Adicione pelo menos um nome.";
      }
    }