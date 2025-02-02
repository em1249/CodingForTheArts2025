function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255); //sets background to white
    rectMode(CENTER); //sets origin of rectangles to the centre

    drawPurpleRectangle();
    drawRedRectangle();
    drawPinkCircle();
}

function drawPurpleRectangle() {
    fill(111, 50, 168); //Purple colour
    rect(100, 100, 100, 200);
}

function drawRedRectangle() {
    fill(235, 64, 52); //Red colour
    rect(175, 200, 250, 50);
}
function drawPinkCircle() {
    ellipseMode(CENTER); //sets origin of the circle to the centre
    fill(252, 3, 169); //Pink colour
    circle(150, 150, 150);
}

