console.log("probando probando");
let botonImportante = document.getElementById("importante");
console.log(botonImportante);

botonImportante.addEventListener("click", cambioColorcito)
botonImportante.addEventListener("mousedown", cambioTamano)

function cambioColorcito(){
    console.log("probando probando");
    botonImportante.style.backgroundColor = "pink"
}

function cambioTamano(){
    console.log("extra")
}

let formulario = document.getElementById("formulario");
console.log(formulario);
formulario.addEventListener("submit", grabarInfo);

function grabarInfo(){
    let apellido = document.getElementById("lname");
     alert(apellido.value);
}