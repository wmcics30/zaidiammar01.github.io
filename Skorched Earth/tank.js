class Tank {

  constructor(x, y, color) {
    this.scale = width/numberOfRects;

    this.x = x;
    this.y = y;
    this.xSize = 30;
    this.ySize = 4;
    this.dx = 1;
    this.color = color;
    this.barrelAngle = 0;
    this.shotPower = 10;
    this.tankCanMove = 200;
  }

  display() {

    fill(this.color);
    rect(this.x * this.scale, this.y, this.xSize, this.ySize);//main hull
    x2 = this.x * this.scale;
    rect(x2+this.xSize*0.2, this.y-this.ySize*0.8, this.xSize*0.6, this.ySize*0.8);//turret
    push();
    translate(x2+this.xSize*0.5,this.y-this.ySize*0.55);
    rotate(this.barrelAngle);
    rect(0, 0, this.xSize*0.8, this.ySize*0.4);//barrel
    pop();
    fill(0);
    ellipse(x2+this.xSize/12,this.y+this.ySize,this.xSize/6);//wheel
    ellipse(x2+this.xSize-this.xSize/12,this.y+this.ySize,this.xSize/6);//wheel
    rect(x2+this.xSize/12,this.y+this.ySize-this.xSize/12, this.xSize*0.85, this.xSize/6);//track
    fill(this.color);
    rect(this.x * this.scale, this.y, this.xSize, this.ySize);//main hull
  }


  movement(player) {

    this.y = rects[this.x].y - this.xSize/5;

    if (player === playerOne) {
      if (keyIsPressed) {
        if ((key === "d" || key === "D") && tankMove <= this.tankCanMove) {
          tankMove++;
          this.x += this.dx;
        }
        else if ((key === "a" || key === "A") && tankMove <= this.tankCanMove) {
          tankMove++;
          this.x -= this.dx;
        }
        else if (key === "q" || key === "Q") {
          this.barrelAngle -= 1;
        }
        else if (key === "e" || key === "E") {
          this.barrelAngle += 1;
        }
        else if (key === "f" && bulletArray.length < 1) {

          tankMove = 0;

          shotSound.play();

          let bulletDx = cos(this.barrelAngle) * this.shotPower;
          let bulletDy = (sin(this.barrelAngle) * this.shotPower) * -1;

          let tankShot = new Bullet(player, bulletDx, bulletDy);
          bulletArray.push(tankShot);
        }
      }
    }
    if (player === playerTwo) {
      if (keyIsPressed) {
        if ((key === "l" || key === "L") && tankMove <= 100) {
          tankMove++;
          this.x += this.dx;
        }
        else if ((key === "j" || key === "J") && tankMove <= 100) {
          tankMove++;
          this.x -= this.dx;
        }
        else if ((key === "u" || key === "U")) {
          this.barrelAngle -= 1;
        }
        else if ((key === "o" || key === "O")) {
          this.barrelAngle += 1;
        }
        else if (key === "h" && bulletArray.length < 1) {

          tankMove = 0;

          shotSound.play();

          let bulletDx = cos(this.barrelAngle) * this.shotPower;
          let bulletDy = (sin(this.barrelAngle) * this.shotPower) * -1;

          let tankShot = new Bullet(player, bulletDx, bulletDy);
          bulletArray.push(tankShot);
        }
      }
    }
  }
}
