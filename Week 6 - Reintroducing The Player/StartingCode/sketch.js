let tileMap = []; //This is an array we will store our tiles in later
let tilesX = 10; //This will be how many tiles there will be on the x axis (horizontally)
let tilesY = 10; //This will be how many tiles there will be on the y axis (vertically)
let tileSize = 50; //How many pixels across each tile will be.
let textures = []; //value to store our textures for the graphics Map


//SETS GRAPHIC TO DISPLAY AT EACH TILE ON SCREEN
let graphicsMap = [ 
   //         2nd VALUE
   //0  1  2  3  4  5  6  7  8  9
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], //2
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4  1st VALUE
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9
];

function preload() {
    textures[0] = loadImage("grassy.png");
    textures[1] = loadImage("stone.png");
}

function setup() {
    createCanvas(500, 500);

    let tileID = 0
    for (let tileX = 0; tileX < tilesX; tileX++) {
        tileMap[tileX] = [];
        for (let tileY = 0; tileY < tilesY; tileY++) {
            let texture = graphicsMap[tileY][tileX]
            tileMap[tileX][tileY] = new Tile(textures[texture], tileX, tileY, tileSize, tileID);
            tileID++;
        }
    }
}

function draw() {
    background(0)
    for (let tileX = 0; tileX < tilesX; tileX++) {
        for (let tileY = 0; tileY < tilesY; tileY++) {
            tileMap[tileX][tileY].display();
            tileMap[tileX][tileY].debugGrid();
        }
    }
}

class Tile{
    constructor(texture, tileX, tileY, tileSize, tileID) {
        //YOU SHOULD ADD COMMENTS EXPLAINING WHAT THESE VARIABLES MEAN
        this.texture = texture;
        this.tileX = tileX;
        this.tileY = tileY;
        this.xPos = tileX * tileSize;
        this.yPos = tileY * tileSize;
        this.tileSize = tileSize;
        this.tileID = tileID;
    }
    display() {
        image(this.texture, this.xPos, this.yPos, this.tileSize, this.tileSize)
    }
    debugGrid() {

        let xPadding = 2; //pads text so it displays within the box (x axis)
        let yCoordinatePadding = 8; //pads coordinate text so it display within the box (y axis) but above ID text
        let yIDPadding = 18; //pads ID text so it displays within the box (y axis) and below the coordinate text
        
        //All Text Settings
        strokeWeight(1)
        stroke("black")
        fill("yellow")

        //Display X and Y coordinate Text
        textSize(8)
        text("X: " + this.tileX + ", Y: " + this.tileY, this.xPos + xPadding, this.yPos + yCoordinatePadding)

        //Display tileID text
        textSize(10)
        text("ID: " + this.tileID, this.xPos + xPadding, this.yPos + yIDPadding)

        //Create rect around tile
        noFill();
        stroke('yellow');
        rect(this.xPos, this.yPos, this.tileSize, this.tileSize);
    }
    displayMessage() {
        let xPadding = 2;
        let yPadding = 40;

        strokeWeight(1)
        stroke("black")
        fill("white")
        textSize(10)
        text("Accessed!", this.xPos + xPadding, this.yPos + yPadding)
    }
}
