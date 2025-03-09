//INITIALISE TILEMAP VARIABLES
let tileMap = []; //This is an array we will store our tiles in later
let tilesX = 10; //This will be how many tiles there will be on the x axis (horizontally)
let tilesY = 10; //This will be how many tiles there will be on the y axis (vertically)
let tileSize = 50; //How many pixels across each tile will be.
let textures = []; //value to store our textures for the graphics Map

//LEVEL DATA OBJECTS
let level0 = {
    graphicsMap: [ 
       //         2nd VALUE (x)
       //0  1  2  3  4  5  6  7  8  9
        [0, 0, 0, 0, 0, 0, 0, 2, 3, 2], //0
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], //2
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4  1st VALUE (y)
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9
     ],

    tileRules: [ 
       //         2nd VALUE (x)
       //0  1  2  3  4  5  6  7  8  9
        [0, 0, 0, 0, 0, 0, 0, 1, 2, 1], //0
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], //2
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4  1st VALUE (y)
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9

        //RULES
        // 0 = walkable
        // 1 = collision/unwalkable
        // 2 = transition
    ],

     startTileX: 8,  //Sets X tile to start player on
     startTileY: 1   //Sets Y tile to start player on
}

let level1 = {
    graphicsMap: [
    //         2nd VALUE (x)  
    //    0  1  2  3  4  5  6  7  8  9
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4], // 0
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4], // 1
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4], // 2 
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 3
        [2, 4, 4, 4, 4, 4, 4, 4, 4, 2], // 4
        [2, 4, 4, 4, 4, 4, 4, 4, 4, 3], // 5
        [2, 4, 4, 4, 4, 4, 4, 4, 4, 2], // 6
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 7
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4], // 8
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4]  // 9
    ],

    tileRules: [
    //         2nd VALUE (x)  
    //   0  1  2  3  4  5  6  7  8  9
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 0
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 1
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 2 
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 3
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 4  1st VALUE (y)
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 5
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 6
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 7
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 8
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]  // 9
    ],

    startTileX: 1, //Sets X tile to start player on
    startTileY: 5  //Sets Y tile to start player on
}

let level2 = {

    graphicsMap: [ 
    //              2nd Value (x)
    //   0  1  2  3  4  5  6  7  8  9 
        [2, 3, 2, 2, 2, 2, 2, 2, 2, 2], // 0
        [2, 4, 4, 4, 4, 4, 4, 4, 4, 2], // 1
        [2, 4, 2, 4, 4, 4, 4, 4, 4, 2], // 2
        [2, 4, 4, 4, 4, 4, 4, 2, 4, 2], // 3
        [2, 4, 4, 4, 4, 4, 4, 4, 4, 2], // 4    1st Value (y)
        [2, 4, 2, 4, 4, 4, 4, 4, 4, 2], // 5
        [2, 4, 4, 4, 4, 4, 4, 4, 4, 2], // 6
        [2, 4, 4, 4, 4, 4, 2, 2, 4, 2], // 7
        [2, 4, 4, 4, 4, 4, 4, 4, 4, 2], // 8
        [2, 2, 3, 2, 2, 2, 2, 2, 2, 2]  // 9
    ],

    tileRules: [ 
    //              2nd Value (x)
    //   0  1  2  3  4  5  6  7  8  9 
        [1, 2, 1, 1, 1, 1, 1, 1, 1, 1], // 0
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 1
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 1], // 2
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 1], // 3
        [1, 0, 0, 0, 0, 1, 0, 0, 0, 1], // 4    1st Value (y)
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 1], // 5
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 6
        [1, 0, 0, 0, 0, 0, 1, 1, 0, 1], // 7
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 8
        [1, 1, 2, 1, 1, 1, 1, 1, 1, 1]  // 9
    ],

    startTileX: 2, //Sets X tile to start player on
    startTileY: 8  //Sets Y tile to start player on
}

//LEVEL CONTROL VARIABLES
let levels = [level0, level1, level2];
let currentLevel = 0;
let graphicMap;
let tileRules;
let count;
let countMax = 30;

function preload() {
    textures[0] = loadImage("grassy.png");
    textures[1] = loadImage("stone.png");
    textures[2] = loadImage("wall_50x.png");
    textures[3] = loadImage("door.png");
    textures[4] = loadImage("void_50x.png");
 
    playerSprite = loadImage("librarian-bw.png");

    enemySprite = loadImage("librarian-pink.png");
}

function setup() {
    createCanvas(500, 500);

    //Load Graphic Data
    loadLevel();

}

function loadLevel() {
    //Load Graphics Data
    graphicsMap = levels[currentLevel].graphicsMap;
    tileRules = levels[currentLevel].tileRules;

    let tileID = 0; //Sets ID for each tile

    //Tile Creation Starts
    for (let tileX = 0; tileX < tilesX; tileX++) {
        tileMap[tileX] = [];
        for (let tileY = 0; tileY < tilesY; tileY++) {

            let texture = graphicsMap[tileY][tileX]; //sets texture value to pass from array
            tileMap[tileX][tileY] = new Tile(textures[texture], tileX, tileY, tileSize, tileID); //TILE CREATION

            tileID++;
        }
    }
    //Tile Creation Finished
}

function draw() {
    background(0)
    for (let tileX = 0; tileX < tilesX; tileX++) {
        for (let tileY = 0; tileY < tilesY; tileY++) {
            tileMap[tileX][tileY].display();
            //tileMap[tileX][tileY].debugGrid();
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