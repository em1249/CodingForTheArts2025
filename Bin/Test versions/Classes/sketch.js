//Variables to contain objects derived from Character class
let blackLibrarian;

let pinkLibrarian;

//Variables to contain sprites for objects
let blackLibrarianSprite;
let pinkLibrarianSprite;

function preload() {
    blackLibrarianSprite = loadImage("librarian-black.png");
    pinkLibrarianSprite = loadImage("librarian-pink.png")
}

function setup() {
    createCanvas(500,500);
    blackLibrarian = new Character(blackLibrarianSprite, 100, 100, 10);
    pinkLibrarian = new Character(pinkLibrarianSprite, 300, 100, 5);

}

function draw() {
    background(100);
    blackLibrarian.display();
    pinkLibrarian.display();
}

function mouseClicked() {
    blackLibrarian.damage(2);
}

function keyPressed() {
    if (keyCode === 32) {
        pinkLibrarian.damage(1);
    }
}

class Character {
    constructor(sprite, posX, posY, hitPoints) {
        this.sprite = sprite;
        this.posX = posX;
        this.posY = posY;
        this.hitPoints = hitPoints;
    }

    display() {
        image(this.sprite, this.posX, this.posY);

        textSize(20);
        text(this.hitPoints, this.posX+50, this.posY-25);
    }

    damage(damage) {
        this.hitPoints-= damage;
    }
}
