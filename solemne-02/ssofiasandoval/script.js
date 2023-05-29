console.log(" hola mundo de artistas :) ");
console.log(" ancho: " + window.innerWidth);
// referido de apuntes de solemne 1

// por favor procesar la info de la fecha,
// por ejemplo detectar si es antes o despues de 2pm, o si es fin de semana o no
// const d = new Date():

// ASI LO INTENTE PRIMERO
// document.getElementById("demo").innerHTML = d;
// function horario (event){
//   event.preventDefault();
//   console.log("horario");
//   document.getElementById("lv").innerHTML =
//     "hola " + lv.value;
// no funciono :()

// DESPUES ASI CON AYUDA DE VALE MONTECINOS, REFERIDO DE https://www.w3schools.com/js/tryit.asp?filename=tryjs_date_compare
   
// let text;
// const today = new Date();
// const someday = new Date();
// someday.setFullYear(2100, 0, 14);

// if (someday > today) {
//   text = "ESTA ABIERTO  January 14, 2100.";
// } else {
//   text = "ESTA CERRADO January 14, 2100.";
// }
// document.getElementById("demo").innerHTML = text;
// pero no era lo que realmente buscaba

// llegue a https://stackoverflow.com/questions/23225262/website-changes-according-to-hours-of-the-day
// lo estoy intentando 

// document.body.onload = function(fecha)cuando se carga hace esto 
// {


// aca si funciono :) se cambio de var a let, y aca aviso si la galeria esta abierta o cerrada 

     let rightNow = new Date();
     let hour = rightNow.getHours();
     let p = document.getElementById("fecha");
     if(9<hour<18) //If it's between 9 AM and 18:59 AM
     {
         p.innerHTML= "estamos abierto :)";
     }
     else if(19<hour<8) //If it's between 7 pm and 8:59 PM
     {
      p.innerHTML= "estamos cerrados :(";
     }



// referido de https://www.w3schools.com/js/tryit.asp?filename=tryjs_date_current

let formulario = document.getElementById("formulario");
console.log(formulario);

formulario.addEventListener("submit", registrarme);
 
function registrarme(event) {
  event.preventDefault();
  console.log("te has registrado");
  document.getElementById("bienvenide").innerHTML =
    "hola " + nombre.value;
    document.getElementById("suscrito").innerHTML =
    "hola  " + email.value;
    document.getElementById("preferencias").innerHTML =
    "hola " + Artistasfavoritos.value;
}
// referido de la misma clase de hoy
