// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  let x = random(width);
  let y = random(height);
  let ellipseSize = random(10, 20);
  let rectSize = random(10, 20);

  if (mouseX > width / 2){
    fill(random(255));
    x = constrain(x, width / 2, width);
    rect(random(width), random(height) , rectSize,);
  }

  else{
    fill(random(50), random(20), random(255));
    x = constrain(x, 0, width / 2);
    ellipse(x, y , ellipseSize,);
  }

}
