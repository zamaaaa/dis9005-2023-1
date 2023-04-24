console.log("HOLA! Bienvenides")
console.log("ancho: " + window.innerWidth);
let par;
par = document.getElementById("class=linea-1");
if (window.innerWidth < 900) {
    par.innerHTML = "menor a 900 px";
}
else {
    par.innerHTML = "mayor o igual a 900 px";
}
