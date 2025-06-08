const button = document.getElementById("acesso");

button.addEventListener("click", () => {
    const nome = document.getElementById("nome").value.trim();
    const ra = document.getElementById("ra").value.trim();
    const url = button.getAttribute("data-url");

    if (nome !== "" && ra !== "") {
        window.location.href = url; // redireciona para a segunda página
    } else {
        alert("Por favor, preencha seu nome e RA para continuar.");
    }
});