let formulario = document.getElementById("completar");
console.log(formulario);
formulario.addEventListener("submit", grabarInfo);

function grabarInfo(){
    let confirmar = document.getElementById("letra");
    alert("Muy bien?");
}
function respuesta(){
    document.getElementById("respuesta").innerHTML = "It's always pulling us apart";
}
function cambiarColor(){
    document.getElementById("cambiarColor").style.color = "green";
}
function cambiarColor1(){
    document.getElementById("cambiarColor1").style.color = "green";
}
// Cambiar color texto https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_onclick2

function sorpresa(){
    document.body.style.backgroundColor = "salmon";
    document.body.style.color = "purple"
}
// cambiar color letra y pantalla https://bobbyhadz.com/blog/javascript-change-background-color-on-click