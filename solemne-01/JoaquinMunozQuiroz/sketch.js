// Funciones que hacen más simple el que genere los circulos, la otra opción era copiar muchas veces la linea de codigo y cambiarle el valor de separación para hacer otro circulo
let gap = 10;
let cirNum = 60;
let cirSize = 50;
let angle=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(degrees);
}
// Dice el color del fondo donde esta albergado el circula y los valores del cursor, como que sea un circulo de grosor 7
function draw() {
  background(232, 233, 237);
  noCursor();
  noStroke();
  fill('black');
  circle(mouseX, mouseY, 7);
  // Aquí abajo esta todo lo relativo al como funciona el circulo
  push();
  translate(width/2, height/2);
  rotate(angle);
  // Valores que manegan la velocidad a la que rota el circulo y otros valores, como el color de los circulos y el peso de la linea
  angle = angle + map (mouseX, 0, width, -0.2, 0.2);
  noFill();
  stroke('black');
  strokeWeight(1);
  // Aquí es para que me genere circulos en base a la orden que tiene justo abajo con los parametros que puse más arriba del archivo, tambien pude ayudar a mi compañero aquí y decirle que p5.js es bacan y de lo que era capaz
  for (let i=0; i < cirNum; i++){
    arc(0, 0, cirSize + gap * i, cirSize + gap * i, 45, 360-i/2);
  }
pop()

}