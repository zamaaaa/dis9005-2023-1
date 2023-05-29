console.log("Bienvenido!");

/* fecha https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_input_date_get */
// Fecha de la publicacion del articulo //
function FechaArticulo() {
  var x = document.getElementById("fecha").value;
  document.getElementById("demo").innerHTML = x;
}

// Falté la clase pasada así que anoté en mis apuntes el trabajo de Irene Medina para entender los códigos//
// Inicio de sesión a partir de usuario y contraseña con botón de ingreso //
let formulario = document.getElementById("formulario");
console.log(formulario);
formulario.addEventListener("submit", grabarInfo);
function grabarInfo() {
  let apellido = document.getElementById("lname");
  alert(apellido.value);
}

let botonInicio = document.getElementById("inicio");
console.log(botonInicio);

botonInicio.addEventListener("click", CambiarColor);

function CambiarColor() {
  console.log("Mail Enviado!");
  botonInicio.style.backgroundColor = "red";
}


