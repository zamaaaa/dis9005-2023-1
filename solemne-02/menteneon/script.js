console.log("Hola");
let juanin = document.getElementById("inicio");
console.log(juanin);

let formulario = document.getElementById("formulario");
console.log(formulario);

formulario.addEventListener("submit", ingresar);

function ingresar(event) {
  event.preventDefault();
  console.log("has ingresado");
  document.getElementById("bienvenida").innerHTML =
    "Hola ahora me llamo " + nombre.value;
}
// Codigo rescatado de Montoyamoraga https://github.com/menteneon/dis9005-2023-1/tree/main/solemne-02/montoyamoraga

//cambiar tamaño y cambiar color solo son nombres ficticios, no affectan en el codigo//

document
  .getElementById("mijuanin")
  .addEventListener("click", displayDate);

// cambiar a espanol, o usar solamente una parte de la info,
// por ejemplo detectar si es manana o tarde, si es dia laboral o fin de semana, etc.
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

// codigo rescatado de https://www.w3schools.com/js/js_htmldom_eventlistener.asp
