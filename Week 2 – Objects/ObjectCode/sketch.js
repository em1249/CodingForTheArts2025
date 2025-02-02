//INITIALISE VARIABLES

//Black and White Librarian Object
let bwLibrarian = {
    sprite: null, //Key for our sprite; loadImage() assigns value in preload
    posX: 150, //the position on the x axis
    posY: 150, //the position on the y axis
    hitPoints: 10, //hitpoints character has at start
    textPaddingX: 50, //textpadding on x axis (moves it to the right slightly)
    textPaddingY: -25, //textpadding on y axis (moves it up slighty)

    //Display player art and hitpoints
    display: function() {
        image(this.sprite, this.posX, this.posY);

        textSize(20);
        text(this.hitPoints, this.posX + this.textPaddingX, this.posY + this.textPaddingY)
        //   1st parameter         2nd parameter                   3rd parameter
        // Note: I prefer to always add paddings, so I have set textPaddingY to -25. If you set it to 25,
        // you'll need to *subtract* this.textPaddingY from this.posY:
        // this.posY - this.textPaddingY
    },

    //Damage bwLibrarian
    damage: function(damage) {
        healthPoints -= damage; //note -= is shorthand for this healthpoints = healthpoints - damage;
                                //i.e. take the value of healthpoints and take away the value of damage!
    }
}

//BASE p5 FUNCTIONS
function preload() {
    bwLibrarian.sprite = loadImage("librarian-bw.png"); //loads sprite image file
}

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    bwLibrarian.display(); //function that handles bwLibrarian content to display
}

function mouseClicked() {
    bwLibrarian.damage(2); //technically a magic number, but we'll allow it for today!
}

