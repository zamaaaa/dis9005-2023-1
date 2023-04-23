console.log("Hola! bienvenido");

//Códigos extraídos del trabajo de una compañera, se añadió fecha y ancho de ventana//
console.log("ancho: " + window.innerWidth);
const d = new Date("2022-03-25");
document.getElementById("fecha").innerHTML=d;
function myFunction() {
    document.getElementById("fecha").style.fontSize = "25px"; 
    document.getElementById("fecha").style.color = "red";
    document.getElementById("fecha").style.backgroundColor = "yellow";        
  }
