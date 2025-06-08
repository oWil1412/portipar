const coluna1 = document.getElementById("coluna1");
const coluna2 = document.getElementById("coluna2");
const coluna3 = document.getElementById("coluna3");
const btnVw = document.getElementById("vw");
const btnToyota = document.getElementById("toyota");
const btnFord = document.getElementById("ford");
btnVw.addEventListener("click", () => mostrarColuna("coluna1"));
btnToyota.addEventListener("click", () => mostrarColuna("coluna2"));
btnFord.addEventListener("click", () => mostrarColuna("coluna3"));
function mostrarColuna(colunaId){
    coluna1.classList.remove("ativa");
    coluna2.classList.remove("ativa");
    coluna3.classList.remove("ativa");
    let colunaSelecionada = document.getElementById(colunaId);
    if(colunaSelecionada){
        colunaSelecionada.classList.add("ativa");
    };   
}
mostrarColuna("coluna1");