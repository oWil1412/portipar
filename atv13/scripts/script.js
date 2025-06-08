var vez = "X";
var fim = false;

function jogar(pos) {
  var cel = document.getElementById("c" + pos);
  if (cel.innerText === "" && !fim) {
    cel.innerText = vez;
    if (ganhou()) {
      document.getElementById("msg").innerText = vez + " venceu!";
      fim = true;
    } else if (empate()) {
      document.getElementById("msg").innerText = "Empate!";
      fim = true;
    } else {
      vez = vez === "X" ? "O" : "X";
      document.getElementById("msg").innerText = "Vez de: " + vez;
    }
  }
}

function ganhou() {
  var c = [];
  for (var i = 0; i < 9; i++) {
    c[i] = document.getElementById("c" + i).innerText;
  }
  return (c[0] === vez && c[1] === vez && c[2] === vez) ||
         (c[3] === vez && c[4] === vez && c[5] === vez) ||
         (c[6] === vez && c[7] === vez && c[8] === vez) ||
         (c[0] === vez && c[3] === vez && c[6] === vez) ||
         (c[1] === vez && c[4] === vez && c[7] === vez) ||
         (c[2] === vez && c[5] === vez && c[8] === vez) ||
         (c[0] === vez && c[4] === vez && c[8] === vez) ||
         (c[2] === vez && c[4] === vez && c[6] === vez);
}

function empate() {
  for (var i = 0; i < 9; i++) {
    if (document.getElementById("c" + i).innerText === "") {
      return false;
    }
  }
  return true;
}