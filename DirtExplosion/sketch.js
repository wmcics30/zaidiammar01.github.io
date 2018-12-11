class Particle {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 10;
    this.dx = random(-5, 5);
    this.dy = random(-20, -1);
    this.transparency = 255;
    this.color = color(100, 50, 4, this.transparency);
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }

  update(){
    this.transparency -= 1;
    this.color.setAlpha(this.transparency);
    this.x += this.dx;
    this.y += this.dy;
    this.dy += 0.2;
  }
}

let fireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for (let i = fireworks.length-1; i >=0 ; i--){
    if (fireworks[i].transparency <= 0) {
      fireworks.splice(i, 1);
    }
    else{
      fireworks[i].update();
      fireworks[i].display();
    }
  }
}

function mousePressed(){
  for (let i = 0; i < 200; i++){
    let someParticle = new Particle(mouseX, mouseY);
    fireworks.push(someParticle);
  }
}
