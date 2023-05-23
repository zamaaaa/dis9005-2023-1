// ojo este script.js no esta siendo llamado desde el archivo html
let slideIndex = 1;
showSlides(slideIndex);
// controles Avanzar/retroceder
function plisSlides(n) {
  showSlides((slideIndex += n));
}
// Control de previsualización de fotos
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  // esta linea tenia un error, habias usado if en vez de for
  for (n < 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "active";
}
