// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let stateTitleScreen;
let state;
let stateX;
let lastTimeSwitchedColor = 0;
let lastTimeSwitchedColorX = 0;

let RED_LIGHT_DURATION = 8000;
let GREEN_LIGHT_DURATION = 6000;
let YELLOW_LIGHT_DURATION = 2000;
let elapsedTime;
let elapsedTimeX;

let intersection1lightx = 375;
let intersection1lighty = 150;

let intersection2lightx = 825;
let intersection2lighty = 150;

let intersection3lightx = 825;
let intersection3lighty = 150;

let x;
let y;
let dy;
let dx;

// class Car{
//   constructor(){
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.color = color(random(255));
//   }
//   display(){
//     rect(x,y,20,10);
//     move();
//   }
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = 1;
  stateX = 2;
}

function draw() {
  titleScreen();
  runSimulation();
}

// function move(){
//   for (i = 0, i < Car, i++){
//
//   }
// }
function titleScreen(){
  if (mouseIsPressed){
    stateTitleScreen = 2;
  }
  else{
    fill(150, 200, 255);
    rect(0, 0, width, height/2);
    textSize(75);
    fill(255);
    textStyle(NORMAL);
    text("Ultimate Traffic Light Simulator!!!", width/5, height/6);
    textStyle(ITALIC);
    text("Click to Run Simulation", width/2.5, height/1.2);
  }
}

function runSimulation(){
  if (stateTitleScreen === 2){
    layout();
    checkStateChange();
    checkStateChangeX();
    displayCorrectLight();
    displayCorrectLightX();
  }
}

function checkStateChange() {
  let elapsedTime = millis() - lastTimeSwitchedColor;
  if (state === 1 && elapsedTime >= RED_LIGHT_DURATION) {
    state = 2;
    lastTimeSwitchedColor = millis();
  }
  else if (state === 2 && elapsedTime >= GREEN_LIGHT_DURATION) {
    state = 3;
    lastTimeSwitchedColor = millis();
  }
  else if (state === 3 && elapsedTime >= YELLOW_LIGHT_DURATION) {
    state = 1;
    lastTimeSwitchedColor = millis();
  }
}
function checkStateChangeX() {
  let elapsedTimeX = millis() - lastTimeSwitchedColorX;
  if (stateX === 1 && elapsedTimeX >= RED_LIGHT_DURATION) {
    stateX = 2;
    lastTimeSwitchedColorX = millis();
  }
  else if (stateX === 2 && elapsedTimeX >= GREEN_LIGHT_DURATION) {
    stateX = 3;
    lastTimeSwitchedColorX = millis();
  }
  else if (stateX === 3 && elapsedTimeX >= YELLOW_LIGHT_DURATION) {
    stateX = 1;
    lastTimeSwitchedColorX = millis();
  }
}

function displayCorrectLight() {
  if (state === 1) {
    displayRedLightVertical();
  }
  else if (state === 2) {
    displayGreenLightVertical();
  }
  else if (state === 3) {
    displayYellowLightVertical();
  }
}
function displayCorrectLightX() {
  if (stateX === 1) {
    displayRedLightHorizontal();
  }
  else if (stateX === 2) {
    displayGreenLightHorizontal();
  }
  else if (stateX === 3) {
    displayYellowLightHorizontal();
  }
}

function displayRedLightVertical() {
  fill(200, 200, 0);
  rect(intersection1lightx, intersection1lighty, 10, 30);
  rect(intersection1lightx+90, intersection1lighty+175, 10, 30);
  rect(intersection2lightx, intersection2lighty, 10, 30);
  rect(intersection2lightx+90, intersection2lighty+175, 10, 30);

  rect(intersection3lightx, intersection3lighty, 10, 30);
  rect(intersection3lightx+90, intersection3lighty+175, 10, 30);
  fill(255, 0, 0);
  ellipse(width/2 - 90, height/2 - 130, 5);
  ellipse(width/2 + 90, height/2 + 90, 5);
  fill(100, 100, 0);
  ellipse(width/2 - 90, height/2 - 110, 5);
  ellipse(width/2 + 90, height/2 + 110, 5);
  fill(0, 100, 0);
  ellipse(width/2 - 90, height/2 - 90, 5);
  ellipse(width/2 + 90, height/2 + 130, 5);
}
function displayYellowLightVertical() {
  fill(200, 200, 0);
  rect(intersection1lightx, intersection1lighty, 10, 30);
  rect(intersection1lightx+90, intersection1lighty+175, 10, 30);
  rect(intersection2lightx, intersection2lighty, 10, 30);
  rect(intersection2lightx+90, intersection2lighty+175, 10, 30);
  fill(100, 0, 0);
  ellipse(width/2 - 90, height/2 - 130, 5);
  ellipse(width/2 + 90, height/2 + 90, 5);
  fill(255, 255, 0);
  ellipse(width/2 - 90, height/2 - 110, 5);
  ellipse(width/2 + 90, height/2 + 110, 5);
  fill(0, 100, 0);
  ellipse(width/2 - 90, height/2 - 90, 5);
  ellipse(width/2 + 90, height/2 + 130, 5);
}
function displayGreenLightVertical() {
  fill(200, 200, 0);
  rect(intersection1lightx, intersection1lighty, 10, 30);
  rect(intersection1lightx+90, intersection1lighty+175, 10, 30);
  rect(intersection2lightx, intersection2lighty, 10, 30);
  rect(intersection2lightx+90, intersection2lighty+175, 10, 30);
  fill(100, 0, 0);
  ellipse(width/2 - 90, height/2 - 130, 5);
  ellipse(width/2 + 90, height/2 + 90, 5);
  fill(100, 100, 0);
  ellipse(width/2 - 90, height/2 - 110, 5);
  ellipse(width/2 + 90, height/2 + 110, 5);
  fill(0, 255, 0);
  ellipse(width/2 - 90, height/2 - 90, 5);
  ellipse(width/2 + 90, height/2 + 130, 5);
}
function displayRedLightHorizontal() {
  fill(200, 200, 0);
  rect(intersection1lightx+100, intersection1lighty+20, 30, 10);
  rect(intersection1lightx-20, intersection1lighty+175, 30, 10);
  rect(intersection2lightx+100, intersection2lighty+20, 30, 10);
  rect(intersection2lightx-20, intersection2lighty+175, 30, 10);
  fill(255, 0, 0);
  ellipse(width/2 - 130, height/2 + 110, 5);
  ellipse(width/2 + 90, height/2 - 90, 5);
  fill(100, 100, 0);
  ellipse(width/2 - 110, height/2 + 110, 5);
  ellipse(width/2 + 110, height/2 - 90, 5);
  fill(0, 100, 0);
  ellipse(width/2 - 90, height/2 + 110, 5);
  ellipse(width/2 + 130, height/2 - 90, 5);
}
function displayYellowLightHorizontal() {
  fill(200, 200, 0);
  rect(intersection1lightx+100, intersection1lighty+20, 30, 10);
  rect(intersection1lightx-20, intersection1lighty+175, 30, 10);
  rect(intersection2lightx+100, intersection2lighty+20, 30, 10);
  rect(intersection2lightx-20, intersection2lighty+175, 30, 10);
  fill(100, 0, 0);
  ellipse(width/2 - 130, height/2 + 110, 5);
  ellipse(width/2 + 90, height/2 - 90, 5);
  fill(255, 255, 0);
  ellipse(width/2 - 110, height/2 + 110, 5);
  ellipse(width/2 + 110, height/2 - 90, 5);
  fill(0, 100, 0);
  ellipse(width/2 - 90, height/2 + 110, 5);
  ellipse(width/2 + 130, height/2 - 90, 5);
}
function displayGreenLightHorizontal() {
  fill(200, 200, 0);
  rect(intersection1lightx+100, intersection1lighty+20, 30, 10);
  rect(intersection1lightx-20, intersection1lighty+175, 30, 10);
  rect(intersection2lightx+100, intersection2lighty+20, 30, 10);
  rect(intersection2lightx-20, intersection2lighty+175, 30, 10);
  fill(100, 0, 0);
  ellipse(width/2 - 130, height/2 + 110, 5);
  ellipse(width/2 + 90, height/2 - 90, 5);
  fill(100, 100, 0);
  ellipse(width/2 - 110, height/2 + 110, 5);
  ellipse(width/2 + 110, height/2 - 90, 5);
  fill(0, 255, 0);
  ellipse(width/2 - 90, height/2 + 110, 5);
  ellipse(width/2 + 130, height/2 - 90, 5);
}

function layout(){
  background(100);
  fill(0,150, 0);
  rect(-20, -20, 420, 220, 20);
  rect(450, -20, 400, 220, 20);
  rect(900, -20, 720, 220, 20);

  rect(-20, 300, 420, 200, 20);
  rect(450, 300, 400, 200, 20);
  rect(900, 300, 720, 200, 20);

  rect(-20, 550, 420, 300, 20);
  rect(450, 550, 400, 300, 20);
  rect(900, 550, 720, 300, 20);
}
