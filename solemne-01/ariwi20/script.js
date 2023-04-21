console.log("Atrapalos a todos!");
console.log("ancho:" + window.innerWidth);
let par;
par = document.getElementById("atrapalos");
if (window.innerWidth < 800)  {
atrapalos.innerHTML =  "atrapalos en celular";
}
else {
atrapalos.innerHTML =  "atrapalos en desktop";
}
