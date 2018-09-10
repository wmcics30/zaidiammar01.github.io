// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let dx;
let rectwidth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  dx = 5;
  rectwidth = 100;
}
function draw() {
  background(25, 25, 200);
  x += dx;
  if (x > width - rectwidth || x  < 0){
    dx = dx * -1;
  }
  fill(0,0,0)
  rect(x,400, rectwidth,150);
}
