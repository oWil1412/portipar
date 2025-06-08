const senhaInput = document.getElementById("senha");
const lengthItem = document.getElementById("length");
const letraItem = document.getElementById("letra");
const numeroItem = document.getElementById("numero");
const especialItem = document.getElementById("especial");
const toggleButton = document.getElementById("toggleSenha");
senhaInput.addEventListener("input", () =>{
    var senha = senhaInput.value;
    const temCaracter = senha.length >= 8;
    const temLetra = /[a-zA-Z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);
    const temEspecial = /[^a-zA-Z0-9]/.test(senha);

    updateItem(lengthItem, temCaracter);
    updateItem(letraItem, temLetra);
    updateItem(numeroItem, temNumero);
    updateItem(especialItem, temEspecial);
});
function updateItem(element, condition){
    element.className = condition ? "valido" : "invalido";
};
toggleButton.addEventListener("click", () => {
    const tipo = senhaInput.getAttribute("type") === "password" ? "text" : "password";
    senhaInput.setAttribute("type", tipo);
    toggleButton.textContent = tipo === "password" ? "👁" : "🙈";
});