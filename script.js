console.log("probando");
let martha = document.getElementById("inicio");
console.log(martha);

martha.addEventListener("click", cambiarColor);
martha.addEventListener("mousedown", cambiarTamano);

function cambiarColor(){
    console.log("probando");
    martha.style.backgroundColor = "pink";
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
