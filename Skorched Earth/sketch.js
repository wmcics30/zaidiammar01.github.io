// Tanks
// Parker R, Ammar Zaidi, Brett Girling
// 12/5/2018
//

let numberOfRects;
let rectWidth;
let time = 0;
let rects = [];
let gameState = 0;
let playerState = 1;
let playerOne, playerTwo;
let tank1Health = 3;
let tank2Health = 3;
let tankImage1, tankImage3, tankImage2;
let bgImage;
let x2;
let bulletArray = [];
let fireworks = [];
let shotSound, hitSound, explosionSound, music;
let tankMove = 0;

function preload() {
  tankImage1 = loadImage("assets/tank1.png");
  tankImage2 = loadImage("assets/tank2.png");
  tankImage3 = loadImage("assets/tank3.png");

  bgImage = loadImage("assets/bgImage.png");

  shotSound = loadSound("assets/shoot.flac");
  hitSound = loadSound("assets/hit explosion.wav");
  explosionSound = loadSound("assets/lose explosion.wav");
  music = loadSound("assets/bg music.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  numberOfRects = 500;
  rectWidth = width / numberOfRects;
  establishTerrain();
  playerOne = new Tank(100, 50, color(255, 153, 0));
  playerTwo = new Tank(400, rects[400].y-10, color(97, 164, 232));
}

function draw() {
  background(220);
  checkState();
}

function establishTerrain() {
  for (let i = 0; i < numberOfRects; i++) {
    let rectHeight = noise(time) * height;
    let terrainRectangle = new Terrain(i, rectWidth, rectHeight);
    rects.push(terrainRectangle);
    time += 0.003;
  }
}

function displayRects() {
  for (let i = 0; i < rects.length; i++) {
    rects[i].generate();
  }
}

function checkState() {

  if (gameState === 0) {
    gameMenu();
  }
  else if (gameState === 1) {
    gamePlay();
  }
  else if (gameState === 3) {
    controlScreen();
  }
  else if (gameState === 4) {
    creditScreen();
  }
  if (gameState === 5) {
    gameOver();
  }
  if (gameState === 6) {
    gameOver1()
  }

}

function creditScreen() {
  background(191, 117, 21);

  fill(100);
  rect(0, 0, 200, 65);

  if (mouseX >= 0 && mouseX <= 200){
    if (mouseY >= 0 && mouseY <= 65){
      fill(255, 200, 0);
      rect(0, 0, 200, 65);
    }
  }
  fill(0);
  textSize(50);
  text("Back", 30, 50);

  textSize(50);
  text("Made By:", width/2 - 150, 200);
  text("Parker Rogal", width/2 - 200, 300);
  text("Ammar Zaidi", width/2 - 200, 400);
  text("Brett Girling", width/2 - 200, 500);
}

function gameMenu() {
  if (music.isPlaying()) {
    //
  }
  else {
    music.loop();
  }

  background(206, 228, 232);

  scale(0.5);
  image(tankImage1, 900, 700);
  scale(2);

  scale(0.5);
  image(tankImage2, 450, 675);
  scale(2);
  scale(0.5);
  image(tankImage2, 150, 700);
  scale(2);
  fill(150, 150, 200);
  rect(0,0,width,height/3);

  fill(0);
  textSize(75);
  textStyle(ITALIC);
  text("Scorched Earth", width/2 - 300, 100);

  fill(100);
  rect(width/2 - 150, 250, 200, 65);

  if (mouseX >= width/2 - 150 && mouseX <= width/2 + 50){
    if (mouseY >= 250 && mouseY <= 315){
      fill(255, 200, 0);
      rect(width/2 - 150, 250, 200, 65);
    }
  }


  fill(0);
  textSize(50);
  text("Play!", width/2 - 100, 300);


  fill(100);
  rect(width/2 - 150, 350, 200, 65);

  if (mouseX >= width/2 - 150 && mouseX <= width/2 + 50){
    if (mouseY >= 350 && mouseY <= 415){
      fill(255, 200, 0);
      rect(width/2 - 150, 350, 200, 65);
    }
  }

  fill(0);
  textSize(50);
  text("Controls", width/2 - 145, 400);

  fill(100);
  rect(width/2 - 150, 450, 200, 65);

  if (mouseX >= width/2 - 150 && mouseX <= width/2 + 50){
    if (mouseY >= 450 && mouseY <= 515){
      fill(255, 200, 0);
      rect(width/2 - 150, 450, 200, 65);
    }
  }

  fill(0);
  textSize(50);
  text("Credits", width/2 - 130, 500);

}

function controlScreen(){
  fill(0);
  background(191, 117, 21);
  textSize(60);
  text("Controls", width/2 - 170, 60);

  // controls
  textSize(30);
  text("Player One:", width/2 - 130, 125);
  text("A and D to move side to side", width/2 - 260, 225);
  text("Q and E to change the angle of the barrel", width/2 - 340, 325);
  text("Player Two:", width/2 - 130, 425);
  text("J and L to move side to side", width/2 - 260, 525);
  text("U and O to change the angle of the barrel", width/2 - 360, 625);
  text ("Press F or H when ready to shoot and end your turn", width/2 - 430, 725);

  fill(100);
  rect(0, 0, 200, 65);

  if (mouseX >= 0 && mouseX <= 200){
    if (mouseY >= 0 && mouseY <= 65){
      fill(255, 200, 0);
      rect(0, 0, 200, 65);
    }
  }
  fill(0);
  textSize(50);
  text("Back", 30, 50);

}

function mousePressed(){
  if (mouseX >= width/2 - 150 && mouseX <= width/2 + 50){
    if (mouseY >= 250 && mouseY <= 315){
      gameState = 1;
    }
  }
  if (mouseX >= width/2 - 150 && mouseX <= width/2 + 50){
    if ((mouseY >= 350 && mouseY <= 415) && gameState === 1){
      gameState = 3;
    }
  }
  if (mouseX >= width/2 - 150 && mouseX <= width/2 + 50){
    if (mouseY >= 450 && mouseY <= 515){
      gameState = 4;
    }
  }
  if (gameState === 3 || gameState === 4){
    if (mouseX >= 0 && mouseX <= 200){
      if (mouseY >= 0 && mouseY <= 65){
        gameState = 0;
      }
    }
  }
  if (gameState === 5 || gameState === 6) {
    if (mouseX >= width/2-100 && mouseX <= width/2+100){
      if (mouseY >= height/2-30 && mouseY <= height/2+30){
        gameState = 0;
        tank1Health = 3;
        tank2Health = 3;
      }
    }
  }
}

function gameOver() {
  background(191, 117, 21);
  fill(0);
  text("Player Two Wins!", width/2 - 170, 200);
  fill(100);
  rect(width/2-200, height/2-30, 400, 60);

  if (mouseX >= width/2-100 && mouseX <= width/2+100){
    if (mouseY >= height/2-30 && mouseY <= height/2+30){
      fill(255, 200, 0);
      rect(width/2-200, height/2-30, 400, 60);
    }
  }
  fill(0);
  textSize(50);
  text("Back to Menu", width/2-140, height/2+20);
}

function gameOver1() {
  background(191, 117, 21);
  fill(0);
  text("Player One Wins!", width/2 - 170, 200);
  fill(100);
  rect(width/2-200, height/2-30, 400, 60);

  if (mouseX >= width/2-100 && mouseX <= width/2+100){
    if (mouseY >= height/2-30 && mouseY <= height/2+30){
      fill(255, 200, 0);
      rect(width/2-200, height/2-30, 400, 60);
    }
  }
  fill(0);
  textSize(50);
  text("Back to Menu", width/2-140, height/2+20);
}


function gamePlay() {
  image(bgImage,0,0,1920, 1080);
  music.stop();
  fill(0);
  textSize(50);
  displayRects();
  playerOne.display();
  text(tank1Health, 50, 60);
  playerTwo.display();
  text(tank2Health, width-70, 60);
  if (tank1Health <= 0) {
    if(gameState !== 5) {
      gameState = 5;
      explosionSound.play();
    }
    else {
      explosionSound.stop();
    }
  }
  else if (tank2Health <= 0) {
    if(gameState !== 6) {
      gameState = 6;
      explosionSound.play();
    }
    else {
      explosionSound.stop();
    }
  }
  if (playerState === 1) {
    playerOne.movement(playerOne);
  }
  else if (playerState === -1) {
    playerTwo.movement(playerTwo);
  }
  for (let i = 0; i < bulletArray.length; i++) {
    bulletArray[i].display();
    bulletArray[i].move();
    if (bulletArray[i].x >= width || bulletArray[i].x <= 0) {
      bulletArray.splice(i, 1);
      playerState *= -1;
    }
    else if (bulletArray[i].y >= rects[i].y) {
      // let dirtAnim = new Particle(bulletArray[i].x, bulletArray[i].y);
      // fireworks.push(dirtAnim);
      // dirtExplosion();
      bulletArray.splice(i, 1);
      playerState *= -1;
    }
  }
}
