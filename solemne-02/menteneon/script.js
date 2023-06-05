console.log ("Hola");



let botoninicio= document.getElementById("inicio");
console.log(botoninicio);

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


const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function countDays() {
  let fechaInicial= new Date(document.form_main.date_ini.value);
  let fechaFinal= new Date(document.form_main.date_end.value);

  let diff = date_end.getTime() - date_ini.getTime();

  document.getElementById('days').innerText = Math.floor(diff / day);
}

// codigo rescatado de https://dev.to/walternascimentobarroso/day-counter-with-javascript-3545#:~:text=In%20this%20function%20(%20countDays(),ready%20as%20simple%20as%20that.
