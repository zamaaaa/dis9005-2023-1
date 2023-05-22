



// inspirado en https://github.com/disenoUDP/dis9005-2023-1/blob/main/clases/clase-09/Tessbb/script.js
let formulario = document.getElementById("formulario");
let martha = document.getElementById("inicio");
console.log(formulario);
formulario.addEventListener("submit", grabarInfo);

function grabarInfo(event) {
  event.preventDefault();
  let nombreEntrenador = document.getElementById("entrenador");
  martha.style.backgroundColor = "lightgreen";
  alert(nombreEntrenador.value);
  
//   console.log(document.getElementById("bienvenida"));
//   document.getElementById("bienvenida").innerHTML = "hola po " + nombreEntrenador.value;
}


