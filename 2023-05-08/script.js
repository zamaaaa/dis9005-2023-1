console.log("probando");
let botonInicio = document.getElementById("inicio");
console.log(botonInicio);

botonInicio.addEventListener("click", cambiarColor);
botonInicio.addEventListener("mousedown", cambiarTamano);


function cambiarColor(){
    console.log("probando");
    botonInicio.style.backgroundColor = "lightblue"

}
function cambiarTamano(){
    console.log("otro");

}