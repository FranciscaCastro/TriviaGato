function iniciarCronometro() {
  const contador = 45, cronometroDisplay = document.getElementById("cronometro")

  iniciarTiempo(contador, cronometroDisplay)  
}

function iniciarTiempo(duracion, componente) {
    interval = setInterval(() => {
    if (duracion === 0) {

      componente.innerHTML = "Se acabó el tiempo";

      clearInterval(interval);

      loadQuestions()

    } else {
      
      duracion = duracion <45 ? + duracion : duracion;

      componente.textContent = "00:" + duracion;

      duracion--;
    }
    }, 1000)
}