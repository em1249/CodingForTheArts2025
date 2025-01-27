//TESTTESTTESTTEST
//TESTTESTTESTTEST
//INITIALISE VARIABLES
let player = {
    playerSprite: null, //This will hold our object's sprite; we set it to null and assign it in preload
    posX: 200, //the position on the x axis
    posY: 200, //the position on the y axis
    hitPoints: 10, //health
}


//FUNCTIONS
function preload() {
    player.playerSprite = loadImage("librarian-black.png"); //load the player sprite art into the player object's playerSprite variable
}

function setup() {
    createCanvas(500, 400);
}

function draw() {
    background(100);
    display(); //run display function
}

//Function to display player artwork and HitPoints as text
function display() {
    imageMode(CENTER);
    image(player.playerSprite, player.posX, player.posY);

    textSize(20);
    text(player.hitPoints, player.posX, player.posY-75);
}

//Function to deal damage to player
function takeDamage(damage) {
    player.hitPoints -= damage;
}

//Code activated when user left clicks
function mouseClicked() {
    takeDamage(2); //runs takeDamage function, using 2 as damage variable.
}

let pageInfo = {
    title: "Welcome to my website!", //this is a string
    
}


