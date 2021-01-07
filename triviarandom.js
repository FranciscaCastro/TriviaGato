const preguntas = [

    {
        pregunta: "¿QUÉ FUE LO QUE LE SUCEDIÓ A AURORA (BELLA DURMIENTE) QUE LA HIZO CAER EN UN PROFUNDO SUEÑO?",
        respuestas: ["LA MORDIÓ UN GATO SALVAJE", "SE CAYÓ DE LA ESCALERA Y SE PEGÓ EN LA CABEZA", "SE PINCHÓ EL DEDO CON EL HUSO DE LA RUECA"],
        correcta: 2
    },

    {
        pregunta: "LA VIDA ES SUEÑO Y LOS SUEÑOS...",
        respuestas: ["TE GUIARÁN POR SIEMPRE", "SUEÑOS SON", "PAN CON QUESO"],
        correcta: 1
    },

    {
        pregunta: "¿CÓMO SE LLAMA LA ENFERMEDAD DEL TRASTORNO CRÓNICO DEL SUEÑO?",
        respuestas: ["NARCOLEPSIA", "ENFERMEDAD DE CROHN", "COVID-19"],
        correcta: 0
    }

];

let indice_aleatorio = 0;

let pregunta_txt = "";

let interval;

window.onload = iniciar();

function iniciar() {
    loadQuestions();
    if (localStorage.getItem("SCORE") != null) {
        localStorage.removeItem("SCORE");
    }
    }

function loadQuestions() {
   iniciarCronometro();

    if (preguntas.length > 0) {

        indice_aleatorio = Math.floor(Math.random() * preguntas.length);

        pregunta_txt = "";

        pregunta_txt += '<p class="pregunta">' + preguntas[indice_aleatorio].pregunta + '</p>';

        pregunta_txt += '<button id="opcion0" class="botonTrivias" onclick="verificarRespuestaCorrecta(0, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuestas[0] + '</button>';

        pregunta_txt += '<button id="opcion1" class="botonTrivias" onclick="verificarRespuestaCorrecta(1, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuestas[1] + '</button>';

        pregunta_txt += '<button id="opcion2" class="botonTrivias" onclick="verificarRespuestaCorrecta(2, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuestas[2] + '</button>';

        
        document.getElementById("pregunta").innerHTML = pregunta_txt;

        preguntas.splice(indice_aleatorio, 1);

    } else {
        window.location.href = "resultados.html";
    }
}

let puntos = 0;

function verificarRespuestaCorrecta(indice, correcta) {
    if (correcta === indice) {
        puntos = puntos + 10;      
    }
    
    localStorage.setItem("SCORE", puntos);
     
    document.getElementById("opcion0").disabled = false;
    document.getElementById("opcion1").disabled = false;
    document.getElementById("opcion2").disabled = false;
}

document.getElementById("siguienteTrivia").addEventListener("click", () => { clearInterval(interval), loadQuestions() });