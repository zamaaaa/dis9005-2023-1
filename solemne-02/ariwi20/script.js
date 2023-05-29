console.log("probando");
let martha = document.getElementById("myBtn");
console.log(martha);

martha.addEventListener("myBtn", cambiarColor);

function cambiarColor() {
  console.log("probando");
  martha.style.backgroundColor = "pink";
}
document.getElementById("myBtn")
  .addEventListener("click", function () {
    alert("Elige el que mejor se adapte a tu personalidad");
  });
  const btn = document.getElementById('myBtn');

  btn.addEventListener('click', function onClick() {
    btn.style.backgroundColor = 'salmon';
    btn.style.color = 'white';
  });
