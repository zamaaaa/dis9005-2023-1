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
//cambiar tamaño y cambiar color solo son nombres ficticios, no affectan en el codigo//
