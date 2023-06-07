// Informacion sacada de lo que trabaje en clase anteriores
// Mensaje en la consola
console.log("Bienvenido al mundo doglover");

// boton que cabian al contacto con el raton
console.log("probando");
let botonInicio = document.getElementById("inicio");
console.log(botonInicio);

botonInicio.addEventListener("click", cambiarColor);

function cambiarColor() {
  console.log("probando");
  botonInicio.style.backgroundColor = "blue";
}

let formulario = document.getElementById("formulario");
console.log(formulario);

formulario.addEventListener("submit", ingresar);

function ingresar(event) {
  event.preventDefault();
  console.log("has ingresado");
  document.getElementById("bienvenida").innerHTML =
    "Gracias por visitar esta pagina " + nombre.value;
    alert("Que genial " + raza.value)
}
