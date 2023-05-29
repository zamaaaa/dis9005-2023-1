console.log("123");

let formulario = document.getElementById("formulario");
console.log(formulario);

formulario.addEventListener("submit", ingresar);

function ingresar(event) {
    event.preventDefault();
    console.log("has ingresado");
    document.getElementById("bienvenida").innerHTML = "hola belleza " + nombre.value;
}

// PARA VER LOS MENSAJES EN CONSOLA SE HACE.... option comando i

// para un mensaje cuantico
console.log("mensaje"); //Mostrará el mensaje en forma de error, resaltado en rojo.



let day;
// codigo extraido de  https://www.w3schools.com/js/tryit.asp?filename=tryjs_switch
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;
