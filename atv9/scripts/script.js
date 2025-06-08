var contador = 0;

    function adicionarItem() {
      var input = document.getElementById("itemInput");
      var texto = input.value;
      if (texto != "") {
        var lista = document.getElementById("lista");
        var idItem = "item" + contador;
        lista.innerHTML += "<div id='" + idItem + "' class='item'>" + texto +
          "<span class='remover' onclick='removerItem(\"" + idItem + "\")'>[x]</span></div>";
        contador++;
        input.value = "";
      }
    }

    function removerItem(id) {
      var elemento = document.getElementById(id);
      if (elemento) {
        elemento.remove();
      }
    }