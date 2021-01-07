const preguntas = [

    {
        pregunta: "DE LA LISTA QUE SIGUE A CONTINUACIÓN, ¿CUÁLES SON IMPORTANTES, SEGÚN INVESTIGADORES DEL SUEÑO, PARA COMBATIR EL INSOMNIO?",
        respuestas: ["APAGAR TODAS LAS LUCES, INCLUYENDO RELOJES LED", "CONSUMIR COMIDA LIGERA ANTES DE ACOSTARSE", "TODAS LAS ANTERIORES"],
        correcta: 2
    },

    {
        pregunta: "¿CUÁL ES LA MEJOR POSICIÓN PARA DORMIR?",
        respuestas: ["DE LADO, POSTURA IZQUIERDA", "ENROLLADO COMO GATO", "HACIENDO LA INVERTIDA"],
        correcta: 0
    },

    {
        pregunta: "SI TE DESPIERTAS DURANTE LA NOCHE, ¿QUÉ TE PUEDE AYUDAR PARA VOLVER A DORMIR?",
        respuestas: ["HACER EJERCICIOS DE RESISTENCIA", "RESOLVER TRIVIAS DESDE TU CELULAR", "TRASLADARTE A OTRA HABITACIÓN POR 20 MINUTOS Y LEER UNA REVISTA O LIBRO ABURRIDO"],
        correcta: 2
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