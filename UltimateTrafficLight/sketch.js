// Ultimate Traffic Light
// Ammar Zaidi
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let y;
let dy;
let x;
let state;
//let stateX;
let lastTimeSwitchedColor = 0;

let RED_LIGHT_DURATION = 4000;
let GREEN_LIGHT_DURATION = 3000;
let YELLOW_LIGHT_DURATION = 1000;
let elapsedTime;

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = 1;
  //stateX = 2;
  x = width /2;
  y = height;
  dy = -2;
}

function draw() {
  background(100);
  drawIntersection();
  drawRect();
  checkForStateChange();
  //checkForStateChangeX();
  displayCorrectLight();
  //displayCorrectLightX();
  displayCarY();

}

function drawIntersection(){
  fill(0, 100, 0);
  rect(0, 0, width/2 - 50, height/2 - 50);
  rect(width/2 + 50, 0, width/2 - 50, height/2 - 50);
  rect(0, height/2 + 50, width/2 - 50, height/2 - 50);
  rect(width/2 + 50, height/2+50, width/2 - 50, height/2 - 50);
}

function checkForStateChange() {
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

function displayCarY(){
  fill(240);
  rect(x,y,30,60);
  if (y <= 0 - 80){
    y = height;
  }
  else if (y >= height/2 + 70 && y <= height/2 + 90 && state === 1){
    y;
  }
  else{
    y += dy;
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

<<<<<<< HEAD
//function displayXLights(){
  //if (state === 1 && elapsedTime >= 3000){
    //displayYellowLightHorizontal();
  //}
  //else if (state === 1){
    //displayGreenLightHorizontal();
  //}
//}
=======
>>>>>>> 8c1a4b969b82fa66c86e704c4204d34e34f1dedb

function displayRedLightVertical() {
  fill(255, 0, 0);
  ellipse(width/2 - 90, height/2 - 130, 15, 15);
  ellipse(width/2 + 90, height/2 + 90, 15, 15);
  fill(100, 100, 0);
  ellipse(width/2 - 90, height/2 - 110, 15, 15);
  ellipse(width/2 + 90, height/2 + 110, 15, 15);
  fill(0, 100, 0);
  ellipse(width/2 - 90, height/2 - 90, 15, 15);
  ellipse(width/2 + 90, height/2 + 130, 15, 15);
}

function displayYellowLightVertical() {
  fill(100, 0, 0);
  ellipse(width/2 - 90, height/2 - 130, 15, 15);
  ellipse(width/2 + 90, height/2 + 90, 15, 15);
  fill(255, 255, 0);
  ellipse(width/2 - 90, height/2 - 110, 15, 15);
  ellipse(width/2 + 90, height/2 + 110, 15, 15);
  fill(0, 100, 0);
  ellipse(width/2 - 90, height/2 - 90, 15, 15);
  ellipse(width/2 + 90, height/2 + 130, 15, 15);
}

function displayGreenLightVertical() {
  fill(100, 0, 0);
  ellipse(width/2 - 90, height/2 - 130, 15, 15);
  ellipse(width/2 + 90, height/2 + 90, 15, 15);
  fill(100, 100, 0);
  ellipse(width/2 - 90, height/2 - 110, 15, 15);
  ellipse(width/2 + 90, height/2 + 110, 15, 15);
  fill(0, 255, 0);
  ellipse(width/2 - 90, height/2 - 90, 15, 15);
  ellipse(width/2 + 90, height/2 + 130, 15, 15);
}

function displayRedLightHorizontal() {
  fill(255, 0, 0);
  ellipse(width/2 - 130, height/2 + 110, 15, 15);
  ellipse(width/2 + 90, height/2 - 90, 15, 15);
  fill(100, 100, 0);
  ellipse(width/2 - 110, height/2 + 110, 15, 15);
  ellipse(width/2 + 110, height/2 - 90, 15, 15);
  fill(0, 100, 0);
  ellipse(width/2 - 90, height/2 + 110, 15, 15);
  ellipse(width/2 + 130, height/2 - 90, 15, 15);
}

function displayYellowLightHorizontal() {
  fill(100, 0, 0);
  ellipse(width/2 - 130, height/2 + 110, 15, 15);
  ellipse(width/2 + 90, height/2 - 90, 15, 15);
  fill(255, 255, 0);
  ellipse(width/2 - 110, height/2 + 110, 15, 15);
  ellipse(width/2 + 110, height/2 - 90, 15, 15);
  fill(0, 100, 0);
  ellipse(width/2 - 90, height/2 + 110, 15, 15);
  ellipse(width/2 + 130, height/2 - 90, 15, 15);
}

function displayGreenLightHorizontal() {
  fill(100, 0, 0);
  ellipse(width/2 - 130, height/2 + 110, 15, 15);
  ellipse(width/2 + 90, height/2 - 90, 15, 15);
  fill(100, 100, 0);
  ellipse(width/2 - 110, height/2 + 110, 15, 15);
  ellipse(width/2 + 110, height/2 - 90, 15, 15);
  fill(0, 255, 0);
  ellipse(width/2 - 90, height/2 + 110, 15, 15);
  ellipse(width/2 + 130, height/2 - 90, 15, 15);
}


function drawRect() {
  fill(200, 200, 0);
  rect(width/2 - 100, height/2 - 140, 20, 60, 1);
  rect(width/2 + 80, height/2 + 80, 20, 60, 1);
  rect(width/2 - 140, height/2 + 100, 60, 20, 1);
  rect(width/2 + 80, height/2 - 100, 60, 20, 1);
}
