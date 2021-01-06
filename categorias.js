function pintarNombre() {
    document.getElementById("saludo").innerHTML += localStorage.getItem("name"); 
}

pintarNombre()

const temas = [
    "TRIVIA DEL SUEÑO", "TRIVIA RANDOM"
]