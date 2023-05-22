console. log("probando");
let botoninicio = document.getElementById("inicio");
console.log (botoninicio);

botoninicio.addEventListener("click", cambiarColor);
botoninicio.addEventListener("mousedown", cambiarTamano);

function cambiarColor(){
    console.log("probando")
    botoninicio.style.backgroundColor = "red"
}

function cambiarTamano(){
    console.log("otro")
}
