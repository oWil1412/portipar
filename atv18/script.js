let countdown;
    function startTimer() {
      clearInterval(countdown); // limpa caso já tenha um timer rodando
      const minutes = parseInt(document.getElementById("minutes").value, 10) || 0;
      const seconds = parseInt(document.getElementById("seconds").value, 10) || 0;
      let totalSeconds = minutes * 60 + seconds;
      if (totalSeconds <= 0) {
        alert("Por favor, insira um tempo maior que zero.");
        return;
      }
      updateDisplay(totalSeconds);
      countdown = setInterval(() => {
        totalSeconds--;
        updateDisplay(totalSeconds);
        if (totalSeconds <= 0) {
          clearInterval(countdown);
          alert("⏰ Tempo esgotado!");
        }
      }, 1000);
    }
    function updateDisplay(totalSeconds) {
      const m = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
      const s = String(totalSeconds % 60).padStart(2, '0');
      document.getElementById("timer").textContent = `${m}:${s}`;
    }