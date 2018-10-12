// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// Image Manipulation Demo
// Dan Schellenberg
// Oct 9, 2018

let bird;
let grayBird;

function preload() {
  bird = loadImage("assets/osprey-adler-bird-of-prey-raptor-73825.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(bird, 0, 0);
  grayBird = makeGrayscale(bird);
  image(grayBird, 0, 0);
}

function draw() {

}

function makeGrayscale(sourceImage) {
  let img = createImage(sourceImage.width, sourceImage.height);

  img.loadPixels();
  sourceImage.loadPixels();

  for (let x = 0; x < sourceImage.width; x++) {
    for (let y = 0; y < sourceImage.height; y++) {
      let p = sourceImage.get(x, y);

      let r = red(p);
      let g = green(p);
      let b = blue(p);

      let newPixel = color((r+g+b)/3, (r+g+b)/3, (r+g+b)/3);

      img.set(x, y, newPixel);
    }
  }

  img.updatePixels();
  return img;
}
