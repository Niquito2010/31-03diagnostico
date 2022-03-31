let draft, ready;

function preload() {
  ready = loadImage("./Pagina-3abajo.png");
  draft = loadImage("./Pagina-3abajo.bw.png");
}

function setup() {
  createCanvas(1920, 1080)
    .position(25, 30)
    .style("z-index", -1);
 
  // noCursor();
  // cursor("./brush.jpeg", 20, -10);
  image(ready, 0, 0);
  image(draft, 0, 0);
}
function mouseDragged() {
  copy(ready, mouseX, mouseY, 20, 20, mouseX, mouseY, 20, 20);
}


