console.log("Conoce sobre tu destino");
// Me sale un error en la consola que no pude resolver

// lo resolvio profesore, habia un tag de picture que no habias cerrado
// y tambien un warning de que te faltaba definir el idioma, por eso agregue
// el tag meta con charset
// por favor incluir comentarios sobre lo que estas haciendo aqui
// y tambien las fuentes, porque esto lo vimos en clases

let formulario = document.getElementById("formulario");
console.log(formulario);

formulario.addEventListener("submit", ingresar);

function ingresar(event) {
  event.preventDefault();
  console.log("has ingresado");
  document.getElementById("bienvenida").innerHTML =
    "hola tu " + nombre.value;
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
