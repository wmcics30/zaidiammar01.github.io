// Pong
// Ammar Zaidi
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x;
let y;
let dy;

let x3;
let y3;
let dx3;
let dy3;

let bounceSound;

let scorepl1;
let scorepl2;

function preload(){
  bounceSound = loadSound("assets/Tick.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 0;
  y = height / 2;
  dy = 8;

  x2 = width - 20;
  y2 = height / 2;
  dy2 = 8;

  x3 = width / 2;
  y3 = height / 2;
  dx3 = 5;
  dy3 = 3;

  scorepl1 = 0;
  scorepl2 = 0;


}

function draw() {
  background(0);
  player();
  player2();
  ball();
  text('PONG', width/2, 40);
  fill(255);
  score1();
  score2();
  //mouse();

}

function ball(){
  ellipse(x3, y3, 20);
  x3 += dx3;
  y3 += dy3;
  if (y3 > height - 20 || y3 < 20){
    dy3 = dy3 * -1;
    bounceSound.setVolume(1);
    bounceSound.play();
  }
  if (x3 === width - 30){
    if (y3 > y2 && y3 < y2 + 100){
      dx3 = dx3 * -1;
    }
  }
  if (x3 === 30){
    if (y3 > y && y3 < y + 100){
      dx3 = dx3 * -1;
    }
  }
  if (x3 > width + 5 || x3 < 0 - 5){
    x3 = width/2;
    y3 = height/2;
  }
}

function player(){
  rect(x, y, 20, 100);
  if (keyIsDown(87)){
    y -= dy;
  }
  if (keyIsDown(83)){
    y += dy;
  }
}
function player2(){
  rect(x2, y2, 20, 100);
  if (keyIsDown(38)){
    y2 -= dy2;
  }
  if (keyIsDown(40)){
    y2 += dy2;
  }
}

  function score1(){
    text(scorepl1, 20, 40);
    textSize(30)
    fill(255);
    if (x3 > width){
      scorepl1 = scorepl1 + 1;
    }
  }

  function score2(){
    text(scorepl2, width - 40, 40);
    textSize(30)
    fill(255);
    if (x3 < 0){
      scorepl2 = scorepl2 + 1;
    }
  }

  //function mouse() {
    //if (mouseIsPressed()){
      //scorepl1 = 0;
      //scorepl2 = 0;
      //x3 = width/2;
      //y3 = height/2;
    //}

  //}
