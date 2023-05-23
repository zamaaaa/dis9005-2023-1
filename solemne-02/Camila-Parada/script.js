console.error("Nada que ver por acá");
// Recuperado de: https://www.w3schools.com/jsref/met_console_error.asp

const img = document.getElementById("variedades");
let currentImgIdx = 1;
const images = [
  "images/cute.uwu.jpeg",
  "images/komano.touhou.png",
  "images/medicine.jpeg",
];

function changeImage() {
  if (currentImgIdx >= images.length) {
    currentImgIdx = 0;
  }
  img.src = images[currentImgIdx];
  currentImgIdx++;
}
// Recuperado de: https://programmersportal.com/how-to-change-an-image-on-button-click-in-javascript/

let formulario = document.getElementById("formulario");
console.log(formulario);
formulario.addEventListener("submit", grabarInfo);

function grabarInfo() {
  let apellido = document.getElementById("message");
  alert("i'll be ready for read what you wrote");
}
// Recuperado de: Clase 15/05
