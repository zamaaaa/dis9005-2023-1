console.log("solemne");
let botonMaestro = document.getElementById("urgente");
console.log(botonMaestro);

botonMaestro.addEventListener("click", cambiarColor);

function cambiarColor() {
  console.log("pum");
  botonMaestro.style.backgroundColor = "pink";
}

let trabajo = document.getElementById("trabajo");
console.log(trabajo);
trabajo.addEventListener("submit", grabarInfo);

function grabarInfo() {
  let apellido = document.getElementById("lname");
  alert(apellido.value);
}
function mardini() {
  document.getElementById("urgente").style.color = "red";
}
