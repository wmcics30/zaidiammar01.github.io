// DVD Bounce
// Ammar Zaidi
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let dvd;
let x, y;
let dx, dy;

function preload() {
  dvd = loadImage("assets/dvdlogo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2 - dvd.width / 2;
  y = height/2 - dvd.height / 2;
  dx = random(3, 8);
  dy = random(3, 8);
}

function draw() {
  moveDVD();
  displayDVD();
}

function moveDVD(){
  x += dx;
  y += dy;
  if (x + dvd.width >= width  || x <= 0) {
    dx = dx * -1;
  }
  if (y + dvd.height >= height || y <= 0){
    dy = dy * -1;
  }
}

function displayDVD(){
  background(60);
  image(dvd, x, y);
}
