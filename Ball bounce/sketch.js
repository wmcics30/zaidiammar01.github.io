// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 5;
    this.dx = random(-10, 10);
    this.dy = random(-10, 10);
    this.color = color(random(100, 240), 120);
    this.isCollidingRightNow = false;
  }

  display() {
    noStroke();
    if (this.isCollidingRightNow) {
      fill(255, 0, 0, 255);
    }
    ellipse(this.x, this.y, this.radius*2, this.radius*2);
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.y <= 0 + this.radius || this.y >= height - this.radius) {
      this.dy *= -1;
    }
    if (this.x <= 0 + this.radius || this.x >= width - this.radius) {
      this.dx *= -1;
    }
  }

  checkForCollision(otherBall) {
    if (dist(this.x, this.y, otherBall.x, otherBall.y) <= this.radius + otherBall.radius) {
      // the balls are colliding!!
      this.isCollidingRightNow = true;
    }
  }
}

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(0);
  for (let i = ballArray.length - 1; i >= 0; i--) {
    ballArray[i].isCollidingRightNow = false;
    for (let j = 0; j < ballArray.length; j++) {
      if (i !== j) {  //don't check collision against self...
        ballArray[i].checkForCollision(ballArray[j]);
      }
    }
    ballArray[i].update();
    ballArray[i].display();
  }
}

function mousePressed() {
  let someBall = new Ball(mouseX, mouseY);
  ballArray.push(someBall);
}
