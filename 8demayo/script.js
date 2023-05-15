console.log("probando");
let botonInicio = document.getElementById("importante");
console.log(botonInicio);

botonInicio.addEventListener("click", cambiarColor)
botonInicio.addEventListener("mousedown", cambiarTamano)

function cambiarColor(){
    console.log("probando");
    botonInicio.style.backgroundColor = "lightgreen"
}
function cambiarTamano(){
    console.log("otro");
}
let formulario = document.getElementById("formulario");
console.log(formulario);
formulario.addEventListener("submit", grabarInfo);

function grabarInfo(){
    let Apellido = document.getElementById("lname");
    alert(Apellido.value);
}