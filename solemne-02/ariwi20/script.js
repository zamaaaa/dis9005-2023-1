
document.getElementById("myBtn").addEventListener("click", function() {
alert("Elige el que mejor se adapte a tu personalidad");
})
console.log("probando");
let martha = document.getElementById("myBtn");
console.log(martha)

martha.addEventListener('myBtn', cambiarColor);
martha.addEventListener('mousedown', cambiarTamano);

function cambiarColor() {
  console.log('probando');
  martha.style.backgroundColor = 'pink';
}

