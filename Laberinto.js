let x = 1;
let y = 1;
let easing = 0.05;
let img;

function setup() {
  img = loadImage("./Pagina-2.png");
  let my_canvas = createCanvas(1920/2, 1080/2)
    .position(25, 30)
    .style("z-index", -1);
 
  noStroke();
}

function draw() {
  background(img);
  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;

  ellipse(x, y, 30, 30);
  fill(1);
}
