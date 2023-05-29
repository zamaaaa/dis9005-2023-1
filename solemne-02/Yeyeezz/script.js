let formulario = document.getElementById("completar");
console.log(formulario);
formulario.addEventListener("submit", grabarInfo);

// formulario para completar la letra de la canci&oacute;n 

function grabarInfo() {
    let confirmar = document.getElementById("letra");
    alert("Muy bien?");
}
function respuesta() {
    document.getElementById("respuesta").innerHTML = "It's always pulling us apart";
}
function cambiarColor() {
    document.getElementById("cambiarColor").style.color = "green";
}
function verde() {
    document.getElementById("verde").style.color = "green";
}
// Cambiar color de texto al hacer click en la frase https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_onclick2

function sorpresa() {
    document.body.style.backgroundColor = "salmon";
    document.body.style.color = "purple"
}
// cambiar color, letra y pantalla al hacer click en la frase bot&oacute;n https://bobbyhadz.com/blog/javascript-change-background-color-on-click
