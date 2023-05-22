console.log(" hola mundo de artistas :) ");
console.log( " ancho: "  + window.innerWidth );

// referido de apuntes de solemne 1

const d = new Date();
document.getElementById("demo").innerHTML = d;

// referido de https://www.w3schools.com/js/tryit.asp?filename=tryjs_date_current 


let formulario = document.getElementById("formulario");
console.log(formulario);

formulario.addEventListener("submit",registrarme);

function registrarme (event) {
  event.preventDefault();
  console.log("te has registrado");
  document.getElementById("bienvenide").innerHTML = "hola " + nombre.value;
}
// referido de la misma clase de hoy 