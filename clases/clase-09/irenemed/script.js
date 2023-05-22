console.log("probando");
let botonInicio = document.getElementById("inicio");
console.log(botonInicio);

botonInicio.addEventListener("click", cambiarColor);
botonInicio.addEventListener("mouseup", cambiarTamano);

function cambiarColor() {
  console.log("probando");
  botonInicio.style.backgroundColor = "red";
}
function cambiarTamano() {
  console.log("otro");
}

let formualario = document.getElementById("formulario");
console.log(formualario);
formualario.addEventListener("submit", grabarInfo);

function grabarInfo() {
  let apellido = document.getElementById("lname");
  alert(apellido.value);
}
