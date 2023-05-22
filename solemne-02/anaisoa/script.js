console.log("Conoce sobre tu destino");
// Me sale un error en la consola que no pude resolver
let formulario = document.getElementById("formulario");
console.log(formulario);

formulario.addEventListener("submit", ingresar);

function ingresar(event) {
  event.preventDefault();
  console.log("has ingresado");
  document.getElementById("bienvenida").innerHTML = "hola tu " + nombre.value;
}

console.log("probando");
let botoninicio = document.getElementById("inicio");
console.log(botoninicio);

botoninicio.addEventListener("click", cambiarColor);
botoninicio.addEventListener("mousedown", cambiarTamano);

function cambiarColor() {
  console.log("probando");
  botoninicio.style.backgroundColor = "red";
}

function cambiarTamano() {
  console.log("otro");
}