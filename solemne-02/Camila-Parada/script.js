// Mensaje consola
// Recuperado de: https://www.w3schools.com/jsref/met_console_error.asp
console.log("Nada que ver por acá");

// Botón que cambia la imagen haciendo click
// Recuperado de: https://programmersportal.com/how-to-change-an-image-on-button-click-in-javascript/

const img = document.getElementById('variedades');
let currentImgIdx = 1;
const images = [ 
    'images/cute.uwu.jpeg',
    'images/komano.touhou.png',
    'images/medicine.jpeg',
]; 

function changeImage(){
    if(currentImgIdx >= images.length){
        currentImgIdx = 0;
    }
    img.src = images[currentImgIdx];
    currentImgIdx++;
}
// Formulario (envio y alerta)
// Recuperado de: Clase 15/05

let formulario = document.getElementById("formulario");
console.log (formulario);
formulario.addEventListener("submit", ingresarYRedireccionar);

function ingresarYRedireccionar(event) {
    event.preventDefault();
    let apellido = document.getElementById ("message");
    alert ("i'll be ready for read what you wrote");
}
// Formulario (redireccionar en 5 segundos a una imagen que vive en el internet)
// Recuperado de: https://www.tutorialspoint.com/How-to-use-JavaScript-to-redirect-a-webpage-after-5-seconds

function redirect() {
    setTimeout (myURL, 5000);
    var result = document.getElementById ("enviar");
    result.innerHTML = "https://pbs.twimg.com/media/FxKBF_3WIAYMDF5?format=jpg&name=medium";
}

function myURL() {
    document.location.href = 'https://pbs.twimg.com/media/FxKBF_3WIAYMDF5?format=jpg&name=medium';
 }
