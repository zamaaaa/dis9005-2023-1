console.log("Bienvenidos a esta p&aacute;gina");
console.log("ancho: " + window.innerWidth);
const d = new Date("2022-03-25");
document.getElementById("fecha").innerHTML = d;
function myFunction() {
    document.getElementById("fecha").style.fontSize = "25px"; 
    document.getElementById("fecha").style.color = "red";
    document.getElementById("fecha").style.backgroundColor = "yellow";        
  }
