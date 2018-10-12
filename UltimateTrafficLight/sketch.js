// Ultimate Traffic Light
// Ammar Zaidi
// Date
//
// Extra for Experts:
// - I havn't used much coding that we havnt done in class. I mostly just used a lot of logic and made it look cool.
let y, y2, y3, y4;
let dy, dy2, dx;
let x, x2, x3;
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

let music;

function preload(){
  music = loadSound("assets/music.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  music.play();
  stateTitleScreen = 1;
  state = 1;
  stateX = 2;
  x = width /2 + 10;
  y = height;
  y2 = height + 200;
  y3 = height/2 + 10;
  y4 = 0;
  dy = -3;
  dy2 = -2.5;
  dx = 3;
  x2 = width/2 - 40;
  x3 = 0;
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
    displayCarY3();
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
  else if (y >= height/2 + 70 && y <= height/2 + 90 && state === 1 || state === 3 && y >= height/2 + 70 && y <= height/2 + 90){
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
  else if (y2 >= height/2 + 70 && y2 <= height/2 + 90 && state === 1 || state === 3 && y2 >= height/2 + 70 && y2 <= height/2 + 90){
    y2;
  }
  else{
    y2 += dy2;
  }
}

function displayCarY3(){
  fill(255, 0, 0);
  rect(x2,y4,30,60);
  if (y4 >= height + 80){
    y4 = 0 - 60;
  }
  else if (y4 >= height/2 - 140 && y4 <= height/2 - 120 && state === 1 || state === 3 && y4 >= height/2 - 140 && y4 <= height/2 - 120){
    y4;
  }
  else{
    y4 -= dy2;
  }
}

function displayCarX1(){
  fill(150);
  rect(x3,y3,60,30);
  if (x3 >= width + 80){
    x3 = 0 - 60;
  }
  else if (x3 >= width/2 - 130 && x3 <= width/2 - 110 && stateX === 1 || stateX === 3 && x3 >= width/2 - 130 && x3 <= width/2 - 110){
    x3;
  }
  else{
    x3 += dx;
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
=======
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

>>>>>>> 6995fef3ba8df2b6f7ff79ae2d331c67776fa598

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
