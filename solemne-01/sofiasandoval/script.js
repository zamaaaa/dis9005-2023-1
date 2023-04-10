console.log(" hola mundo de gatos :) ");
console.log( " ancho: "  + window.innerWidth );
let par;
par = document.getElementById("parrafito");
if (window.innerWidth < 800) { 
    par.innerHTML="miau";
}
else {
    par.innerHTML= "miauuuuuuuuuuuuuuuuu <3";
}

// referido de apuntes de clase pasada

const d = new Date();
document.getElementById("demo").innerHTML = d;

// referido de https://www.w3schools.com/js/tryit.asp?filename=tryjs_date_current 