console.log("Esto funciona?");

let boton = document.getElementById("boton");
console.log(boton);

boton.addEventListener("click", cambiaColor);

function cambiaColor() {
  console.log("Se pudo!");
  boton.style.backgroundColor = "red";
}

let form = document.getElementById("form");
console.log(form);
form.addEventListener("submit", grabarInfo);

function grabarInfo(event) {
  event.preventDefault();
  let user = document.getElementById("user");
  alert("Acceso concedido: " + user.value);
}