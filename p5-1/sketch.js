// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  let s;
  let h;
  let m;
  function setup() {
    createCanvas(400, 400);
  	angleMode(DEGREES);
  	s = second();
  	h = hour();
  	m = minute();
  }

  function draw() {
    background(255);
  	displayFace();
  }


  function displayFace() {
  	translate(width/2, height/2);
  	push();
  	strokeWeight(4);
  	fill(255)
  	ellipse(0,0,350);

  	fill(0)
  	ellipse(0,0,5);

  	for(i = 0; i < 60; i++){
  		strokeWeight(2);
  		line(140,0,160, 0);
  		rotate(360/60);
  	}

  	for(i = 0; i < 12; i++){
  		strokeWeight(4);
  		line(130,0,160, 0);
  		rotate(30);
  	}
  	pop();

  	push();
  	strokeWeight(2);
  	rotate(s*6);
  	line(0,0,0,-150);
  	pop();

  	push();
  	strokeWeight(5);
  	rotate(h*60);
  	line(0,0,0,-50);
  	pop();

  // 	push();
  // 	strokeWeight(3);
  // 	rotate(m*30);
  // 	line(0,0,0,-100);
  // 	pop();
  }
}
