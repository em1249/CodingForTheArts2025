//INITIAL VARIABLES

//Data for Characters
let bwLibrarian; //variable to contain object
let bwLibrarianSprite; // variable to contain sprite
let bwLibrarianXPos = 50; // variable for position on x axis
let bwLibrarianYPos = 100; // variable for position on y axis
let bwLibrarianHitPoints = 10; // variable for hitpoints


let pinkLibrarian //variable to contain object
let pinkLibrarianSprite // variable to contain sprite
let pinkLibrarianXPos = 200; // variable for position on x axis
let pinkLibrarianYPos = 100; // variable for position on y axis
let pinkLibrarianHitPoints = 5; // variable for hitpoints

let textPaddingX = 50; // these will be the same for both characters
let textPaddingY = -25; // these will be the same for both characters

//p5 FUNCTIONS

function preload() {
    bwLibrarianSprite = loadImage("librarian-bw.png"); //load b&w sprite
    pinkLibrarianSprite = loadImage("librarian-pink.png"); //load pink sprite
}

function setup() {
    createCanvas(400, 400);

    //Create Character Objects
    bwLibrarian = new Character(bwLibrarianSprite, 
                                bwLibrarianXPos, 
                                bwLibrarianYPos, 
                                bwLibrarianHitPoints, 
                                textPaddingX, 
                                textPaddingY);


    pinkLibrarian = new Character(pinkLibrarianSprite,
                                    pinkLibrarianXPos,
                                    pinkLibrarianYPos,
                                    pinkLibrarianHitPoints,
                                    textPaddingX,
                                    textPaddingY)
    
                             
}

function draw() {
    background(220);

    bwLibrarian.display();
    pinkLibrarian.display();
}

function mouseClicked(){
    pinkLibrarian.damage(2); //calls damage function for pinkLibrarian and tells it to take away 2 hitPoints
}

//CLASSES
class Character {
    constructor(sprite, xPos, yPos, hitPoints, textPaddingX, textPaddingY) {
        //The constructor takes a bunch of values when our code asks it to create an object
        //creates values inside the object (demarcated in code as "this.") then stores the values
        //passed in as parameters when we create the object in setup().
        this.sprite = sprite; //artwork
        this.xPos = xPos; //x position
        this.yPos = yPos; //y position
        this.hitPoints = hitPoints; //objects hitpoints
        this.textPaddingX = textPaddingX; //padding for hitPoints text on x axis
        this.textPaddingY = textPaddingY; // padding for hitPoints text on y axis
    }

    display() {
        //display sprite
        image(this.sprite, this.xPos, this.yPos);

        //display hitPoints
        textSize(20);
        text(this.hitPoints, this.xPos + this.textPaddingX, this.yPos + this.textPaddingY);
    }

    damage(damage) {
        this.hitPoints -= damage; //takes away the value of damage from the character's hitpoints
    }
}

