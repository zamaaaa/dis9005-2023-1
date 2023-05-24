console.log("Bienvenidos a esta p&aacute;gina");
console.log("ancho: " + window.innerWidth);
const d = new Date("2022-03-25");
document.getElementById("fecha").innerHTML = d;
function myFunction() {
  document.getElementById("fecha").style.fontSize = "25px";
  document.getElementById("fecha").style.color = "red";
  document.getElementById("fecha").style.backgroundColor = "yellow";
}
console.log("probando");
let martha = document.getElementById("inicio");
console.log(martha);

martha.addEventListener("click", cambiarColor);

function cambiarColor() {
  console.log("probando");
  martha.style.backgroundColor = "pink";
}

function myFunction() {
  var x = document.getElementById("myInput").value;
  document.getElementById("demo").innerHTML = "You wrote: " + x;
}
function myFunction() {
  alert("The form was submitted");
}
document.getElementById("myForm").onsubmit = function () {
  myFunction();
};

function myFunction() {
  alert("The form was submitted");
}
console.log("123");

let formulario = document.getElementById("formulario");
console.log(formulario);

formulario.addEventListener("submit", Ingresar);

function Ingresar(event) {
  event.preventDefault();
  console.log("has ingresado");
  document.getElementById("bienvenida").innerHTML =
    "hola tu " + Nombre.value;
}
