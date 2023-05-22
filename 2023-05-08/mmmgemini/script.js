console.log("probando");
let botonInicio = document.getElementById("inicio");
console.log (botonInicio);

botonInicio.addEventListener("click", cambiarColor);
botonInicio.addEventListener("mousedown", cambiarTamano);

function cambiarColor(){
    console.log("probando");
    botonInicio.style.backgroundColor = "lightgreen";
}
function cambiarTamano(){
    console.log("otro");
}