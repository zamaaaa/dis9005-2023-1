console.log("probando");
let botonInicio = document.getElementById("inicio");
console.log(botonInicio);

botonInicio.addEventListener("click", cambiarColor);

function cambiarColor() {
  console.log("probando");
  botonInicio.style.backgroundColor = "lightblue";
}

let formulario = document.getElementById("formulario");
console.log(formulario);
formulario.addEventListener("submit", grabarInfo);

function grabarInfo() {
  let apellido = document.getElementById("lname");
  alert(apellido.value);
}

// <><h1>My First JavaScript</h1><button type="button"
//  onclick="document.getElementById('demo').innerHTML = Date()">
//  Click me to display Date and Time.</button><p id="demo"></p></>
