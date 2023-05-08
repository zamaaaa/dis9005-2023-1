console.log("probando");
let botonInicio = document.getElementById("inicio");
console.log(botonInicio);

botonInicio.addEventListener("click", cambiarColor);
botonInicio.addEventListener("mouseup", cambiarTamano);

function cambiarColor(){
    console.log("probando");
    botonInicio.style.backgroundColor = "red"
}
function cambiarTamano(){
    console.log("otro");
}