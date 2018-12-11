// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Tank {

  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.xSize = 30;
    this.ySize = 4;
    this.dx = 0;
    this.color = color;
    this.gun = 0;
  }

  display() {
    fill(0);
    ellipse(this.x+this.xSize/12,this.y+this.ySize,this.xSize/6);
    ellipse(this.x+this.xSize-this.xSize/12,this.y+this.ySize,this.xSize/6);
    rect(this.x+this.xSize/12,this.y+this.ySize-this.xSize/12, this.xSize*0.85, this.xSize/6);
    fill(this.color);
    rect(this.x, this.y, this.xSize, this.ySize);
    rect(this.x+this.xSize*0.2, this.y-this.ySize*0.8, this.xSize*0.6, this.ySize*0.8);
    rect(this.x+this.xSize*0.2+this.xSize*0.6, this.y-this.ySize*0.55, this.xSize*0.8, this.ySize*0.4);
  }

}

let numberOfRects;
let rectWidth;
let time = 0;
let rects = [];
let gameState = 0;
let playerOne, playerTwo;

function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRects = 500;
  rectWidth = width / numberOfRects;
  generateRectangles();
  playerOne = new Tank(200, 200, "green");
}

function draw() {
  background(220);
  fill(0);
  displayRects();
  playerOne.display();
}

function generateRectangles() {
  for (let i = 0; i < numberOfRects; i++) {
    let rectHeight = noise(time) * height;
    let someRect = {
      x: i * rectWidth,
      y: height - rectHeight,
      w: rectWidth,
      h: rectHeight
    };

    rects.push(someRect);
    time += 0.003;
  }
}

function displayRects() {
  for (let i = 0; i < rects.length; i++) {
    noStroke();
    fill(142, 86, 7);
    rect(rects[i].x,rects[i].y,rects[i].w,rects[i].h);
  }
}
