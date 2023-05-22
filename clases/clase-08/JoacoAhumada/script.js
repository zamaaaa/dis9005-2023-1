console.log("probando");
let martha = document.getElementById("inicio");
console.log(martha);

martha.addEventListener("click", cambiaColor);
martha.addEventListener("mouseup", cambiarTamano);

function cambiaColor() {
  console.log("probando");
  martha.style.backgroundColor = "pink";
}

function cambiarTamano() {
  console.log("otro");
}
