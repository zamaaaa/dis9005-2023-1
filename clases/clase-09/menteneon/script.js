console.log("proban 1, 2, 3");
let juanin = document.getElementById("inicio");
console.log(juanin);

juanin.addEventListener("click", cambiarColor);
juanin.addEventListener("mousedown", cambiarTamano);
function cambiarColor() {
  console.log("probando");
  juanin.style.backgroundColor = "red";
}

function cambiarTamano() {
  console.log("otro");
}

let formulario = document.getElementById("formulario");
console.log(formulario);
formulario.addEventListener("submit", grabarInfo);

function grabarInfo() {
  let apellido = document.getElementById("lname");
  alert(apellido.value);
}
//cambiar tamaño y cambiar color solo son nombres ficticios, no affectan en el codigo//
