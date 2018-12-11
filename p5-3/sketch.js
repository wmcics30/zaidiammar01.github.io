// Ultimate Traffic Light
// Ammar Zaidi
// Date
//
// Extra for Experts:
// - I havn't used much coding that we havnt done in class. I mostly just used a lot of logic and made it look cool.
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
}
// the function below draws stuff.    :)
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
//Calls most functions below
function runSimulation(){
  if (stateTitleScreen === 2){
    background(100);
    drawIntersection();
    drawRect();
    checkForStateChange();
    checkForStateChangeX();
    displayCorrectLight();
    displayCorrectLightX();
  }
}
//Draws and sets up the traffic lights below
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
//displays the cars below

//traffic lights setup continued
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
//draws the traffic lights outline below
function drawRect() {
  fill(200, 200, 0);
  rect(width/2 - 100, height/2 - 140, 20, 60, 1);
  rect(width/2 + 80, height/2 + 80, 20, 60, 1);
  rect(width/2 - 140, height/2 + 100, 60, 20, 1);
  rect(width/2 + 80, height/2 - 100, 60, 20, 1);
}
