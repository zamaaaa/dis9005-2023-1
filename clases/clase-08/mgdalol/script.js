console.log("probando probando");
let botonImportante = document.getElementById("importante");
console.log(botonImportante);

botonImportante.addEventListener("click", cambioColorcito);
botonImportante.addEventListener("mousedown", cambioTamano);

function cambioColorcito() {
  console.log("probando probando");
  botonImportante.style.backgroundColor = "pink";
}
function cambioTamano() {
  console.log("extra");
}
