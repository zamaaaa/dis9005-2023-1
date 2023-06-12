console.log("probando");

document.addEventListener("dblclick", function () {
  document.body.style.backgroundColor = "purple";
});

let formulario = document.getElementById("formulario");
console.log(formulario);

formulario.addEventListener("submit", ingresar);

function ingresar(event) {
  event.preventDefault();
  console.log("has ingresado");
}

formulario.addEventListener("submit", ingresar);

function ingresar(event) {
  event.preventDefault();
  console.log("has ingresado");
  document.getElementById("bienvenida").innerHTML = " Hola " + fname.value + lname.value;
}

//   add Event Listener de w3school
//   me sirvió solo el mensaje en consola del 2do "addEventListener"
// revisar el ejemplo que subi a mi carpeta montoyamoraga
// lo pude arreglar, ahora pasa algo al hacer submit en el formulario

