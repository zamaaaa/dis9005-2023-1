console.log("Esto funciona?");

let boton = document.getElementById("boton");
console.log(boton);

boton.addEventListener("click", cambiaColor);

//Mensajito en la consola para ver que java efectivamente está funcionando
function cambiaColor() {
  console.log("Se pudo!");
  boton.style.backgroundColor = "red";
}
//Código para hacer posible que funcionen todas las alertas de la página y el cambio de colores
let form = document.getElementById("form");
console.log(form);
form.addEventListener("submit", grabarInfo);
//Aquí manda alertas dependiendo de si se puso la info requerida o no y responde distinto dependiendo de esto mismo, cambiando de color el botón
function grabarInfo(event) {
  event.preventDefault();
  let user = document.getElementById("user");
  let password = document.getElementById("password");
  //Esta función la conocía un poquito por unos amigos programadores que tengo y que también la había empleado en p5.js para algo más experimental, pero igualmente revise el w3school para entenderlo de mejor Forma, aquí dejo el link! https://www.w3schools.com/js/js_if_else.asp
  if (password.value) {
    alert("Bienvenido de nuevo! " + user.value);
    boton.style.backgroundColor = "green";
  } else {
    alert("Pon tu contraseña!");
    boton.style.backgroundColor = "red";
  }
}