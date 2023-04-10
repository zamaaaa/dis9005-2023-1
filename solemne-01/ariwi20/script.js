console.log("Atrapalos a todos!");
console.log("ancho:" + window.innerWidth);
let par;
par = document.getElementById("Atrapalos a todos!");
if (window.innerWidth < 200)  {
par.innerHTML =  "menor a 200 px";
}
else {
par.innerHTML =  "mayor o igual a 100 px";
}
