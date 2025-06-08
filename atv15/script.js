const botoes = document.querySelectorAll(".card");
const conteudos = {
  progWEb: document.getElementById("progWEb"),
  pOO: document.getElementById("pOO"),
  cyberseguranca: document.getElementById("cyberseguranca")
};
let atual = null;
botoes[0].addEventListener("click", () => mostrarConteudo("progWEb"));
botoes[1].addEventListener("click", () => mostrarConteudo("pOO"));
botoes[2].addEventListener("click", () => mostrarConteudo("cyberseguranca"));
function mostrarConteudo(id) {
    const novo = conteudos[id];
    if (atual && atual !== novo) {
        atual.classList.remove("ativo");
        setTimeout(() => {
            atual.style.display = "none";
            novo.style.display = "block";
            setTimeout(() => {
                novo.classList.add("ativo");
            }, 10);
        atual = novo;
        }, 300);
    }else if (!atual) {
        novo.style.display = "block";
        setTimeout(() => {
            novo.classList.add("ativo");
        }, 10);
        atual = novo;
    }
};