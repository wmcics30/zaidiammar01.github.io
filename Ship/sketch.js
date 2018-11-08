// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let rows = 40;
let cols = 40;
let grid;
let cellSize;
let ship = {
  x: 20,
  y: 20,
};
let orientation = 1;
let body = {
  x: ship.x,
  y: ship.y + 1,
  x2: ship.x,
  y2:  ship.y + 2,
  x3: ship.x,
  y3:  ship.y + 3,
};
let bulletArray1 = [];
let bulletArray2 = [];
let bulletArray3 = [];
let bulletArray4 = [];


let lastTurn = 0;
let elapsedTime;
let turnDuration = 300;
function setup() {
  createCanvas(700, 700);
  cellSize = width / cols;
}

function draw() {
  background(255);
  time();
  grid = createArray(cols, rows);
  displayGrid();
}

function displayGrid(){
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      if (grid[y][x] === 1){
        fill(200, 200, 200);
      }
      else if (grid[y][x] === 3){
        fill(200, 200, 0);
      }
      else{
        fill(0, 0, 255);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function createArray(cols, rows){
  let randomGrid = [];
  for (let y = 0; y < cols; y++){
    randomGrid.push([]);
  }
  for (let y = 0; y < cols; y++){
    for (let x = 0; x < rows; x++){
      if (x === ship.x || x === body.x || x === body.x2 || x === body.x3){
        if (y === ship.y || y === body.y || y === body.y2 || y === body.y3){
          randomGrid[y].push(1);
        }
      }
      else{
        randomGrid[y].push(0);
      }
      for (let i = 0; i < bulletArray1.length; i++) {
        if (x === bulletArray1[i].x){
          if (y === bulletArray1[i].y){
            randomGrid[y].push(3);
          }
        }
      }
      for (let i = 0; i < bulletArray2.length; i++) {
        if (x === bulletArray2[i].x){
          if (y === bulletArray2[i].y){
            randomGrid[y].push(3);
          }
        }
      }
      for (let i = 0; i < bulletArray3.length; i++) {
        if (x === bulletArray3[i].x){
          if (y === bulletArray3[i].y){
            randomGrid[y].push(3);
          }
        }
      }
      for (let i = 0; i < bulletArray4.length; i++) {
        if (x === bulletArray4[i].x){
          if (y === bulletArray4[i].y){
            randomGrid[y].push(3);
          }
        }
      }
    }
  }
  return randomGrid;
}

function time(){
  let elapsedTime = millis() - lastTurn;
  if (elapsedTime >= turnDuration){
    move();
    lastTurn = millis();
  }
  if (elapsedTime >= turnDuration) {
    if (keyIsDown(88)){
      fireright();
    }
    for (let i = 0; i < bulletArray1.length; i++) {
      bulletArray1[i].x = bulletArray1[i].x + 1;
    }
    for (let i = 0; i < bulletArray2.length; i++) {
      bulletArray2[i].y = bulletArray2[i].y + 1;
    }
    for (let i = 0; i < bulletArray3.length; i++) {
      bulletArray3[i].x = bulletArray3[i].x - 1;
    }
    for (let i = 0; i < bulletArray4.length; i++) {
      bulletArray4[i].y = bulletArray4[i].y - 1;
    }
  }
}

function move(){
  if (keyIsDown(38)){
    updateup();
  }
  else if (keyIsDown(40)){
    updatedown();
  }
  else if (keyIsDown(39)){
    updateright();
  }
  else if (keyIsDown(37)){
    updateleft();
  }
}

function fireright(){
  if (orientation === 1){
    let bullet1 = {
      x: body.x + 1,
      y: body.y,
    };
    bulletArray1.push(bullet1);
  }
  if (orientation === 2){
    let bullet2 = {
      x: body.x,
      y: body.y + 1,
    };
    bulletArray2.push(bullet2);
  }
  if (orientation === 3){
    let bullet3 = {
      x: body.x - 1,
      y: body.y,
    };
    bulletArray3.push(bullet3);
  }
  if (orientation === 4){
    let bullet4 = {
      x: body.x,
      y: body.y - 1,
    };
    bulletArray4.push(bullet4);
  }
}

function updateup(){
  ship.y = ship.y - 1;
  body.y = ship.y + 1;
  body.x = ship.x;
  body.y2 = ship.y + 2;
  body.x2 = ship.x;
  body.y3 = ship.y + 3;
  body.x3 = ship.x;
  orientation = 1;
}

function updatedown(){
  ship.y = ship.y + 1;
  body.y = ship.y - 1;
  body.x = ship.x;
  body.y2 = ship.y - 2;
  body.x2 = ship.x;
  body.y3 = ship.y - 3;
  body.x3 = ship.x;
  orientation = 3;
}

function updateleft(){
  ship.x = ship.x - 1;
  body.y = ship.y;
  body.x = ship.x + 1;
  body.y2 = ship.y;
  body.x2 = ship.x + 2;
  body.y3 = ship.y;
  body.x3 = ship.x + 3;
  orientation = 4;
}

function updateright(){
  ship.x = ship.x + 1;
  body.y = ship.y;
  body.x = ship.x - 1;
  body.y2 = ship.y;
  body.x2 = ship.x - 2;
  body.y3 = ship.y;
  body.x3 = ship.x - 3;
  orientation = 2;
}
