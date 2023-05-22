
document.getElementById("myBtn").addEventListener("click", function() {
alert("Elige el que mejor se adapte a tu personalidad");
})
const redButton = document.getElementById('redButton');
const blueButton = document.getElementById('blueButton');

redButton.addEventListener('click', (e) => {
  const colorSquare = document.getElementById('colorDiv');
  colorSquare.style.backgroundColor = 'red';
});

blueButton.addEventListener('click', (e) => {
  colorSquare.style.backgroundColor = 'blue';
})

