class Bullet {

  constructor(player, dx, dy){

    this.x = player.x * player.scale + player.xSize/2;
    this.y = player.y - player.ySize;
    this.dx2 = dx;
    this.dy2 = dy;
    this.radius = 4;
    this.color = color("yellow");

  }

  display(){

    fill(this.color);
    ellipse(this.x, this.y, this.radius, this.radius);

  }

  move() {

    this.x += this.dx2;
    this.y -= this.dy2;
    this.dy2 = this.dy2-0.1;

    if (playerState === 1) {
      if (this.x > playerTwo.x * (width/numberOfRects) && this.x < (playerTwo.x+playerTwo.xSize) * (width/numberOfRects)) {
        if (this.y > playerTwo.y && this.y < (playerTwo.y - (playerTwo.ySize*0.8))+(playerTwo.ySize + (playerTwo.ySize*0.8))) {
          hitSound.play();
          tank2Health--;
        }
      }
    }
    else if (playerState === -1) {
      if (this.x > playerOne.x * (width/numberOfRects) && this.x < (playerOne.x+playerOne.xSize) * (width/numberOfRects)) {
        if (this.y > playerOne.y && this.y < (playerOne.y - (playerOne.ySize*0.8))+(playerOne.ySize + (playerOne.ySize*0.8))) {
          hitSound.play();
          tank1Health--;
        }
      }
    }

  }

}
