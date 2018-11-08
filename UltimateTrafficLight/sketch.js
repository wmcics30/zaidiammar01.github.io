// Ultimate Traffic Light
// Ammar Zaidi
// Date
//
// Extra for Experts:
// - I havn't used much coding that we havnt done in class. I mostly just used a lot of logic and made it look cool.
let y, y2, y3, y4, y5;
let dy, dy2, dx;
let x, x2, x3, x4;
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
  x = width /2 + 10;                    //used by 2 cars going up
  y = height;                           //used by 1st car going up
  y2 = height + 200;                    //used by 2nd car going up
  y3 = height/2 + 10;                   //used by 1 car going right
  y4 = 0;                               //used by 1 car going down
  dy = -3;                              //used by 2 cars going up and down
  dy2 = -2.5;                           //used by 2nds car going up
  dx = 3;                               //used by 2 car going right and left
  x2 = width/2 - 40;                    //used by 1 car going down
  x3 = 0;                               // used by 1 car going right
  x4 = width;                           //used by 1 car going left
  y5 = height/2 -40;                    //used by 1 car going left
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
    displayCarY();
    displayCarY2();
    displayCarY3();
    displayCarX1();
    displayCarX2();
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
function displayCarY(){
  fill(240);
  rect(x,y,30,60);
  fill(0);
  rect(x+5,y+15,20,15);
  rect(x+7.5,y+45,15,5);
  if (y <= 0 - 80){
    y = height;
  }
  //the lines below checks how close the car infront is.
  else if (y - y2 <= 80 && y > y2){
    y;
  }
  // the lines below check to see if the light is red or yellow and if the car is at the intersection.
  else if (y >= height/2 + 70 && y <= height/2 + 90 && state === 1 || state === 3 && y >= height/2 + 70 && y <= height/2 + 90){
    y;
    fill(255, 0, 0);
    ellipse(x,y+60,10);
    ellipse(x+30,y+60,10);
  }
  else{
    y += dy;
  }
}
function displayCarY2(){
  fill(20);
  rect(x,y2,30,60);
  fill(0);
  rect(x+5,y2+15,20,15);
  rect(x+5,y2+40,20,10);
  if (y2 <= 0 - 80){
    y2 = height;
  }
  else if (y2 - y <= 80 && y2 > y){
    y2;
    fill(255, 0, 0);
    ellipse(x,y2+60,10);
    ellipse(x+30,y2+60,10);
  }
  else if (y2 >= height/2 + 70 && y2 <= height/2 + 90 && state === 1 || state === 3 && y2 >= height/2 + 70 && y2 <= height/2 + 90){
    y2;
    fill(255, 0, 0);
    ellipse(x,y2+60,10);
    ellipse(x+30,y2+60,10);
  }
  else{
    y2 += dy2;
  }
}
function displayCarY3(){
  fill(255, 0, 0);
  rect(x2,y4,30,60);
  fill(0);
  rect(x2+5,y4+10,20,10);
  rect(x2+5,y4+35,20,12);
  if (y4 >= height + 80){
    y4 = 0 - 60;
  }
  else if (y4 >= height/2 - 140 && y4 <= height/2 - 120 && state === 1 || state === 3 && y4 >= height/2 - 140 && y4 <= height/2 - 120){
    y4;
    fill(255, 0, 0);
    ellipse(x2,y4,10);
    ellipse(x2+30,y4,10);
  }
  else{
    y4 -= dy2;
  }
}
function displayCarX1(){
  fill(150);
  rect(x3,y3,60,30);
  fill(0);
  rect(x3+5,y3+5,10,20);
  rect(x3+35,y3+5,10,20);
  rect(x3+25,y3+6,5,18);
  if (x3 >= width + 80){
    x3 = 0 - 60;
  }
  else if (x3 >= width/2 - 130 && x3 <= width/2 - 110 && stateX === 1 || stateX === 3 && x3 >= width/2 - 130 && x3 <= width/2 - 110){
    x3;
    fill(255, 0, 0);
    ellipse(x3,y3,10);
    ellipse(x3,y3+30,10);
  }
  else{
    x3 += dx;
  }
}

function displayCarX2(){
  fill(255);
  rect(x4,y5,60,30);
  fill(0);
  rect(x4+15,y5+5,10,20);
  rect(x4+55,y5+5,3,20);
  if (x4 <= 0 - 140){
    x4 = width;
  }
  else if (x4 >= width/2 + 50 && x4 <= width/2 + 80 && stateX === 1 || stateX === 3 && x4 >= width/2 + 50 && x4 <= width/2 + 80){
    x4;
    fill(255, 0, 0);
    ellipse(x4+60,y5,10);
    ellipse(x4+60,y5+30,10);
  }
  else{
    x4 -= dx;
  }
}

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
