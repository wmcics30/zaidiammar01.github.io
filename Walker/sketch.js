// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
class Walker {
  constructor(){
    this.x = width/2;
    this.y = width/2;
    this.color = "red";
    this.speed = 1;
  }

  display(){
    fill(this.color);
    ellipse(this.x, this.y, 2, 2);
  }

  move(){
    let choice = random(100);
    if (choice < 25){
      //up
      this.y -= this.speed;
    }
    else if (choice < 50){
      this.y += this.speed;
    }
    else if (choice < 75){
      this.x -= this.speed;
    }
    else{
      this.x += this.speed;
    }
  }
}

let tyler;
let nevan;

function setup() {
  createCanvas(windowWidth, windowHeight);
  tyler = new Walker();
}

function draw() {
  tyler.move();
  tyler.display();
}
