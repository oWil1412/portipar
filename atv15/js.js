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
    coluna1.style.display = "none";
    coluna2.style.display = "none";
    coluna3.style.display = "none";
    let colunaSelecionada = document.getElementById(colunaId);
    if(colunaSelecionada != ""){
        colunaSelecionada.style.display = "block";
    };   
}
mostrarColuna("coluna1");