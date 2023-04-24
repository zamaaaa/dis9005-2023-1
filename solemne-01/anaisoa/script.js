console.log("Bienvenido a mi jardin");

//Agregue fecha y ancho de la ventana sacando los codigos del trabajo de una compañera//
console.log("ancho: " + window.innerWidth);
const d = new Date("2023-04-23");
document.getElementById("fecha").innerHTML=d;
function myFunction() {
    document.getElementById("fecha").style.fontSize = "25px"; 
    document.getElementById("fecha").style.color = "red";
    document.getElementById("fecha").style.backgroundColor = "yellow";
  }
