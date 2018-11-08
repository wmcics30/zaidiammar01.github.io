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
function setup() {
  createCanvas(600, 600);
  cellSize = width / cols;
  grid = createArray(cols, rows);
}

function draw() {
  background(255);
  displayGrid();

}

function keyTyped(){
  if (key === "r"){
    grid = createArray(cols, rows);
  }
  else if (key === " "){
    update();
  }
  else if (key === "c"){
    reset();
  }

}
function update(){
  //need 2nd 2d array()
  let nextTurn = [];
  for (let i = 0; i < rows; i++){
    nextTurn[i] = [];
  }
  //loop through the get
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){

      let neighbors = 0;

      for (let i = -1; i <= 1; i++){
        for (let j = -1; j <= 1; j++){
          if (x+i >= 0 && x+i < cols && y+j >= 0 && y+j < rows){
            neighbors += grid[y + j][x + i];
          }
        }
      }
      neighbors -= grid[y][x];

      //applying rules of the game
      if (grid[y][x] === 1){
        if (neighbors === 2 || neighbors === 3){
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }
      if (grid[y][x] === 0){
        if (neighbors  === 3){
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }
    }
  }
  grid = nextTurn;
}

function mousePressed() {
  let x = floor(mouseX/cellSize);
  let y = floor(mouseY/cellSize);

  if (grid[y][x] === 1){
    grid[y][x] = 0;
  }
  else if (grid[y][x] === 0){
    grid[y][x] = 1;
  }
}

function displayGrid(){
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      if (grid[y][x] === 0){
        fill(255);
      }
      else{
        fill(0);

      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}
function reset(){
  for(let x = 0; x < cols; x++){
    for (let y = 0; y < rows; y ++){
      grid[y][x] = 0;
    }
  }
}

function createArray(cols, rows){
  let randomGrid = [];
  for (let y = 0; y < cols; y++){
    randomGrid.push([]);
    for (let x = 0; x < rows; x++){
      if (random(100) < 50){
        randomGrid[y].push(0);
      }
      else{
        randomGrid[y].push(1);
      }
    }
  }
  return randomGrid;
}
