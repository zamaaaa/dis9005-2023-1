console.log("probando");
let botonInicio = document.getElementById("inicio");
console.log(botonInicio);

botonInicio.addEventListener("click", cambiarColor);
botonInicio.addEventListener("mousedown", cambiarTamano);

function cambiarColor(){
   console.log("probando");
   botonInicio.style.backgroundColor = "pink";
}
function cambiarTamano(){
    console.log("otro"); 

}
let formulario =document.getElementById("formulario");
let BotonEnviar =document.getElementById("enviar");
formulario.addEventListener("click", grabarInfo);

function grabarInfo(){
  let apellido = document.getElementById("lname");
    alert(apellido.value);
}