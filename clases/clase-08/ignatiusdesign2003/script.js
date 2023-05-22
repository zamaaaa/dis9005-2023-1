console.log("probando");
let martha = document.getElementById("inicio");
console.log(martha);

martha.addEventListener("click", cambiarcolor);
martha.addEventListener("mouseup", cambiarTamano);

function cambiarcolor() {
  console.log("probando");
  martha.style.backgroundColor = "red";
}
function cambiarTamano() {
  console.log("otro");
}
