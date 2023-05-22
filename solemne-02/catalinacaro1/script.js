
let botoncito =document.getElementById("inicio");
console.log(botoncito);

botoncito.addEventListener("click", cambiarColor);
botoncito.addEventListener("mousedown", cambiarTamano);

function cambiarColor() {

    console.log ("hola")
    botoncito.style.backgroundColor= "green";
}
function cambiarTamano(){
    console.log ("otro")
}