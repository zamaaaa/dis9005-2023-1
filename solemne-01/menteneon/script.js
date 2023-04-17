console.log("holaaaaa super si se puede ahhhh :,<")
console.log("ancho: " + window.innerWidth);
let par;
par = document.getElementById("juanin");
if (window.innerWidth < 700) {
    par.innerHTML = "menor a 700 px";
}
else {
    par.innerHTML = "mayor o igual a 700 px";
}


