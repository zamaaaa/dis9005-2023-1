console.log("solemne");
let botonMaestro = document.getElementById("urgente");
console.log(botonMaestro);

botonMaestro.addEventListener("click", cambiarColor)
botonMaestro.addEventListener("mousedown", cambiarTamano)

function cambiarColor(){
    console.log("pum");
    botonMaestro.style.backgroundColor = "pink"
}
function cambiarTamano(){
    console.log("pim");
}
let trabajo = document.getElementById("trabajo");
console.log(trabajo);
trabajo.addEventListener("submit", grabarInfo);

function grabarInfo(){
    let Apellido = document.getElementById("lname");
    alert(Apellido.value);
}
function mardini(){
    document.getElementById("urgente").style.color = "red";
}