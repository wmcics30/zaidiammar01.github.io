// Ultimate Traffic Light
// Ammar Zaidi
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let y, y2;
let dy, dy2, dx;
let x;
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

function setup() {
  createCanvas(windowWidth, windowHeight);
  stateTitleScreen = 1;
  state = 1;
  stateX = 2;
  x = width /2 + 10;
  y = height;
  y2 = height + 200;
  dy = -2;
  dy2 = -1.9;
  dx = 2;
}

function draw() {
  titleScreen();
  runSimulation();
}

function titleScreen(){
  if (mouseIsPressed){
    stateTitleScreen = 2;
  }
  else{
    background(0, 150, 0);
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
    background(100);
    drawIntersection();
    drawRect();
    checkForStateChange();
    checkForStateChangeX();
    displayCorrectLight();
    displayCorrectLightX();
    displayCarY();
    displayCarY2();
    displayCarX1();
  }

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

function checkForStateChangeX() {
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

function displayCarY(){
  fill(240);
  rect(x,y,30,60);
  if (y <= 0 - 80){
    y = height;
  }
  else if (y - y2 <= 80 && y > y2){
    y;
  }
  else if (y >= height/2 + 70 && y <= height/2 + 90 && state === 1){
    y;
  }
  else{
    y += dy;
  }
}

function displayCarY2(){
  fill(20);
  rect(x,y2,30,60);
  if (y2 <= 0 - 80){
    y2 = height;
  }
  else if (y2 - y <= 80 && y2 > y){
    y2;
  }
  else if (y2 >= height/2 + 70 && y2 <= height/2 + 90 && state === 1){
    y2;
  }
  else{
    y2 += dy2;
  }
}

function displayCarX1(){
  fill(200);
  x = 0;
  y = height /2 + 10;
  rect(x,y,60,30);
  if (x >= width + 80){
    x = width;
  }
  else if (x >= width/2 - 70 && y2 <= width/2 - 90 && state === 1){
    x;
  }
  else{
    x += dx;
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

// let thisCar = {
//     x: 100,
//     y: 50,
//     dx: 0,
//     dy: 5,
// };
// undefined
// thisCar.x
// 100
// let otherCar = {
//     x: 200,
//     y: 450,
//     dx: 1,
//     dy: 0,
// };
// undefined
// carArray = []
// []
// carArray.push(thisCar)
// 1
// carArray
// [{…}]0: dx: 0dy: 5x: 100y: 50__proto__: Objectlength: 1__proto__: Array(0)
// carArray.push(otherCar)
// 2
// carArray[0].x
// 100
// carArray[1].x
// 200