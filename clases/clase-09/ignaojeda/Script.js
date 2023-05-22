console.log("probando");
let botonInicio = document.getElementById("inicio");
console.log(botonInicio);

botonInicio.addEventListener("click", cambiarColor);
botonInicio.addEventListener("mousedown", cambiarTamano);
function cambiarColor() {
  console.log("probando");
  botonInicio.style.backgroundColor = "red";
}
function cambiarTamano() {
  console.log("otro");
}

let formulario = document.getElementById("formulario");
console.log(formulario);
formulario.addEventListener("submit", grabarInfo);

/// formulario es nombre de fantasia ecogido por nosotros, la segunda palabra formulario de la linea 15 es la que conversa con html

function grabarInfo() {
  let apellido = document.getElementById("lname");
  alert(apellido.value);
}
/// a las funciones les podemos dar el nombre que queramos menos los que ya existen
