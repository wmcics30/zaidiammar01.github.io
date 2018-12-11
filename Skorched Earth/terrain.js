class Terrain {

  constructor(currentNumber, currentWidth, currentHeight) {
    this.x = currentNumber * currentWidth;
    this.y = height - currentHeight;
    this.w = currentWidth;
    this.h = currentHeight;
    this.color = random(200, 255);
  }

  generate() {
    noStroke();
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
  }

}
