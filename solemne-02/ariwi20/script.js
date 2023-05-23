document
  .getElementById("myBtn")
  .addEventListener("click", function () {
    alert("Elige el que mejor se adapte a tu personalidad");
  });
console.log("probando");
let martha = document.getElementById("myBtn");
console.log(martha);

martha.addEventListener("myBtn", cambiarColor);

function cambiarColor() {
  console.log("probando");
  martha.style.backgroundColor = "pink";
}

// esto estaba en tu index.html y lo movi aca
// el formateo que hice es que cada punto . empieza en una nueva linea
// es solamente visual para entender los pasos, no afecta funcionamiento
document
  .getElementById("myBtn")
  .addEventListener("click", function () {
    alert("Elige el que mejor se adapte a tu personalidad");
  });
