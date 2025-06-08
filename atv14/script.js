const minutosJ = document.querySelector("#minutos");
const segundosJ = document.querySelector("#segundos");
const mSegundosJ = document.querySelector("#mSegundos");
const btnIniciar = document.querySelector("#btnIniciar");
const btnPausar = document.querySelector("#btnPausar");
const btnContinuar = document.querySelector("#btnContinuar");
const btnReiniciar = document.querySelector("#btnReiniciar");
let interval;
let minutos = 0;
let segundos = 0;
let mSegundos = 0;
let isPaused = false;

btnIniciar.addEventListener("click", () =>{
    isPaused = false;
    startTimer();
    toggleButtons("rodando");
});
btnPausar.addEventListener("click", () => {
    isPaused = true;
    toggleButtons("pausado");
});
btnContinuar.addEventListener("click", () => {
    isPaused = false;
    toggleButtons("rodando");
    startTimer();
});
btnReiniciar.addEventListener("click", () => {
    isPaused = true;
    minutos = 0;
    segundos = 0;
    mSegundos = 0;
    minutos.textContent = "00";
    segundos.textContent = "00";
    mSegundos.textContent = "000";
    toggleButtons("inicial");
    atualizarDisplay();
});
function startTimer(){
    interval = setInterval(() => {
        if(!isPaused){
            mSegundos += 10
            if(mSegundos === 1000){
                segundos++;
                mSegundos = 0;
            }
            if(segundos === 60){
                minutos++;
                segundos = 0;
            }
            minutosJ.textContent = minutos;
            segundosJ.textContent = segundos;
            mSegundosJ.textContent = mSegundos;
            atualizarDisplay();
        }
    }, 10)
}
function atualizarDisplay(){
    minutosJ.textContent = minutos.toString().padStart(2, "0");
    segundosJ.textContent = segundos.toString().padStart(2, "0");
    mSegundosJ.textContent = mSegundos.toString().padStart(2, "0");
}
function toggleButtons(estado){
    switch(estado){
        case "inicial":
            btnIniciar.style.display = "inline-block";
            btnPausar.style.display = "none";
            btnContinuar.style.display = "none";
            btnReiniciar.style.display = "none";
            break;
        case "rodando":
            btnIniciar.style.display = "none";
            btnPausar.style.display = "inline-block";
            btnContinuar.style.display = "none";
            btnReiniciar.style.display = "inline-block";
            break;
        case "pausado":
            btnIniciar.style.display = "none";
            btnPausar.style.display = "none";
            btnContinuar.style.display = "inline-block";
            btnReiniciar.style.display = "inline-block";
            break;
    }
}
toggleButtons("inicial");