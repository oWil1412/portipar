window.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const iframe = document.getElementById("preview-frame");
    if(cards.length > 0){
        const firstCard = cards[0];
        firstCard.classList.add("active");
        iframe.src = firstCard.getAttribute("data-url");
    }
    cards.forEach(card => {
        card.addEventListener("click", () =>{
            cards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
            const url = card.getAttribute("data-url");
            iframe.src = url;
        });
    });
});