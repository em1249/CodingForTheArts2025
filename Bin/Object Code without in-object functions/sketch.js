//INITIALISE VARIABLES

//Black and White Librarian Object
let bwLibrarian = {
    sprite: null, //Key for our sprite; loadImage() assigns value in preload.
    posX: 150, //the position on the x axis
    posY: 150, //the position on the y axis
    hitPoints: 10, //health
}

//FUNCTIONS
function preload() {
    bwLibrarian.sprite = loadImage("librarian-bw.png"); //load the bwLibrarian sprite art into the bwLibrarian object's bwLibrarianSprite variable
}

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(100);
    display(); //run display function
}

//Function to display bwLibrarian artwork and HitPoints as text
function display() {
    image(bwLibrarian.sprite, bwLibrarian.posX, bwLibrarian.posY);

    textSize(20);
    text(bwLibrarian.hitPoints, bwLibrarian.posX+50, bwLibrarian.posY-25);
}

//Function to deal damage to bwLibrarian
function takeDamage(damage) {
    bwLibrarian.hitPoints -= damage;
}

//Code activated when user left clicks
function mouseClicked() {
    takeDamage(2); //runs takeDamage function, using 2 as damage variable.
}




