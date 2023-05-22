console.log("Bienvenido!")

/* fecha https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_input_date_get */
function myFunction() {
    var x = document.getElementById("myDate").value;
    document.getElementById("demo").innerHTML = x;
  }


// Falté la clase pasada así que anoté en mis apuntes el trabajo de Irene Medina para entender los códigos//
let formulario = document.getElementById("formulario");
console.log(formulario);
formulario.addEventListener("submit", grabarInfo);
function grabarInfo(){
    let apellido = document.getElementById("lname");
    alert(apellido.value);
}


let botonInicio = document.getElementById("inicio")
console.log(botonInicio);

botonInicio.addEventListener("click", CambiarColor);
botonInicio.addEventListener("mouseup", cambiarTamano);
function CambiarColor(){
    console.log("Mail Enviado!")
    botonInicio.style.backgroundColor = "red";
}

function cambiarTamano(){
    console.log("otro");
}

