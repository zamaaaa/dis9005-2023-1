console.log("HOLA! Bienvenides")
console.log("ancho: " + window.innerWidth);

document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}
let formulario = document.getElementById("formulario");
console.log(formulario);

formulario.addEventListener("submit", ingresar);

function ingresar(event) {
    event.preventDefault();
    console.log("has ingresado");
    document.getElementById("bienvenida").innerHTML = "Lo hiciste! :) Tu Huillin se llama " + nombre.value;
}