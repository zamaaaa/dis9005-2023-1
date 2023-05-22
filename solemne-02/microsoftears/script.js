console.log("probando")
let martha = document.getElementById("inicio");
console.log(martha);

martha.addEventListener("click", cambiarColor);


function cambiarColor(){
    console.log("probando");
    martha.style.background = "red"
}


console.log("123");

let formulario = document.getElementById("formulario");
console.log(formulario);

formulario.addEventListener("submit", ingresar);

function ingresar(event) {
  event.preventDefault();
  console.log("has ingresado");
  document.getElementById("bienvenida").innerHTML = "hola tu " + nombre.value;
}
// https://www.w3schools.com/js/js_dates.asp