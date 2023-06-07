let formulario = document.getElementById("formulario");
console.log(formulario);

formulario.addEventListener("submit", ingresar);

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_alert agregue un a alerta al ingresar
function ingresar(event) {
  event.preventDefault();
  let nombre = document.getElementById("nombre");
  console.log("has ingresado");
  alert(
    "ya ingresaste\n" + nombre.value);
  
}
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_alert2 esto es par auqe la alerta se divida en dos lineas

// https://www.w3schools.com/html/tryit.asp?filename=tryhtml_head_script esto es para ponerle texto antes de un boton y que cuando se haga onclick cambie el parrafo
function boton() {
  document.getElementById("demo").innerHTML = "adoptar";
}
