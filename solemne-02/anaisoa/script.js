console.log("Conoce sobre tu destino");

// Quise poner inicio de sesión al princicipio de la pagina donde se ponga el nombre y despues de apretar el botón ingresar cambie el texto

let formulario = document.getElementById("formulario");
console.log(formulario);
// Código extraido desde Github.com en la carpeta de montoyamoraga
formulario.addEventListener("submit", ingresar);

// Mi compañera Irene me ayudó para agregar el mensaje despues de apretar ingresar
function ingresar(event) {
  event.preventDefault();
  console.log("has ingresado");
  document.getElementById("bienvenida").innerHTML =
    "hola tu " + nombre.value;
    alert("Conoce mas información" + equipo.value);
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
