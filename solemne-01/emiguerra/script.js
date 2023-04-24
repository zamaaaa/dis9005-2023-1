console.log("Bienvenidos a esta p&aacute;gina");
console.log("ancho: " + window.innerWidth);
const d = new Date("2022-04-20");
document.getElementById("fecha").innerHTML = d;
function myFunction() {
    document.getElementById("fecha").style.fontSize = "25px"; 
    document.getElementById("fecha").style.color = "green";
    document.getElementById("fecha").style.backgroundColor = "green";        
  }
