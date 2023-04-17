let gap = 10;
let cirNum = 60;
let cirSize = 50;
let angle=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(degrees);
}

function draw() {
  background(232, 233, 237);
  noCursor();
  noStroke();
  fill('black');
  circle(mouseX, mouseY, 7);
  
  push();
  translate(width/2, height/2);
  rotate(angle);
  //angle = map(mouseX,0, width, -1, 1);
  angle = angle + map (mouseX, 0, width, -0.2, 0.2);
  noFill();
  stroke('black');
  strokeWeight(1);
  for (let i=0; i < cirNum; i++){
    arc(0, 0, cirSize + gap * i, cirSize + gap * i, 45, 360-i/2);
  }
pop()

}