//VARIABLES
let librarians = []; //empty array to store librarian objects
let pinkLibrarianSprite; //empty variable to store librarian sprite
let numLibrarians = 50; //number of librarians we'll spawn
let size = 48; //size of each librarian on screen

function preload() {
    pinkLibrarianSprite = loadImage("librarian-pink.png");
}

function setup() {
    createCanvas(400, 400);

    for (x = 0; x < numLibrarians; x++) { //for loop that runs the same number as times numLibrarians
        //The code below creates a new Character object and stores it in the librarians array at
        //the same index as the value of x in the current loop
        librarians[x] = new Character(pinkLibrarianSprite, //stores sprite in object
                                        random(width - size), //gets a value between 0 and the width of the canvas
                                        random(height - size),//gets a value between 0 and the height of the canvas
                                        size) //passes the size we assigned up top to the new object.
    }
}

function draw() {
    background(220);

    for (x = 0; x < numLibrarians; x++) { //for loop works the same as the one above
        librarians[x].display(); //only runs display function if hitpoints is more than 0
    }
}

class Character {
    constructor(sprite, xPos, yPos, size) {
        this.sprite = sprite;
        this.xPos = xPos;
        this.yPos = yPos;
        this.size = size; // new variable we're passing into our objects
    }

    display() {
        //Displays Character object on screen
        image(this.sprite, this.xPos, this.yPos, this.size, this.size); //NOTE THAT THIS.SIZE IS CALLED TWICE!!
    }
}


