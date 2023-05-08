console.log("probando");
let martha = document.getElementById("inicio");
console.log(martha);

martha.addEventListener("click", cambiarColor);
martha.addEventListener("mousedown", cambiarTamano);

function cambiarColor(){
    console.log("probando");
    martha.style.backgroundColor = "red";
}
function cambiarTamano(){
    console.log("otro");
}