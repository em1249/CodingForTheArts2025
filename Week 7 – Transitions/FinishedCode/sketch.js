//INTIALISE PLAYER VARIABLES
let player;
let playerSprite;
let playerSpeed = 5;

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
}

function setup() {
    createCanvas(500, 500);

    //Create Player
    player = new Player(playerSprite, 3, 3, tileSize, tileRules);

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

    if (player.transition) { 
        //CALLED ONCE PER FRAME: first checks if count is equal to countMax.
        //If it is, it sets player.transition to false
        //Otherwise, it simply adds 1 to count! This repeats until count is same as countMax!
        if (count === countMax) player.transition = false; 
        else count++;                          
    }

    player.display();
    player.setDirection();
    player.move();
}

class Player{
    constructor(sprite, startX, startY, tileSize, tileRules) {
        //PLAYER SPRITES
        this.sprite = sprite;

        //TILE POSITION DATA
        this.tileX = startX,
        this.tileY = startY,

        //PIXEL POSITION DATA
        this.xPos = startX * tileSize;
        this.yPos = startY * tileSize;

        //DIRECTION PLAYER WANTS TO MOVE
        this.dirX = 0;
        this.dirY = 0;

        //PLAYER'S TARGET PIXEL POSITION
        this.tx = this.xPos;
        this.ty = this.yPos;
        
        //MOVEMENT
        this.isMoving = false;
        this.transition = false;
        this.speed = 5;

        //TILE DATA
        this.tileSize = tileSize;
        this.tileRules = tileRules;
        this.transition = false
    }

    display() {
        image(this.sprite, this.xPos, this.yPos, this.tileSize, this.tileSize)
    }

    setDirection() {
        //Variables for the keycode for keyIsDown
        let up = 87;        //w
        let down = 83       //s
        let left = 65;      //a
        let right = 68;     //d

        if (!this.isMoving) { //CHECK IF PLAYER IS CURRENT MOVING, IF NOT, RUN THE CODE BELOW:

            if (keyIsDown(up)) {
                this.dirX = 0;
                this.dirY = -1;
            }

            if (keyIsDown(down)) {
                this.dirX = 0;
                this.dirY = 1;
            }

            if (keyIsDown(left)) {
                this.dirX = -1;
                this.dirY = 0;
            }

            if (keyIsDown(right)) {
                this.dirX = 1;
                this.dirY = 0;
            }

            this.checkTargetTile()
            
        }
    }

    checkTargetTile() {
        if (this.transition) {
            this.dirX = 0;
            this.dirY = 0;
        }

        //Calculate tile position of currentTile
        this.tileX = Math.floor(this.xPos / this.tileSize);
        this.tileY = Math.floor(this.yPos / this.tileSize);

        //Calculate tile coordinates of next Tile;
        let nextTileX = this.tileX + this.dirX;
        let nextTileY = this.tileY + this.dirY;

        //Check if nextTileX and nextTileY are both inbounds
        //Remember && means AND (i.e. if ALL conditions are true)
        if (nextTileX >= 0 &&       //left side of map
            nextTileX < tilesX &&   //right side of map
            nextTileY >= 0 &&       //top of map
            nextTileY < tilesY) {  //bottom of map 

            if (tileRules[nextTileY][nextTileX] === 2) { //Check for Transition Tile
                currentLevel++;
                
                if (currentLevel >= levels.length) currentLevel = 0; //Checks if currentLevel is out of range, if so, sets to 0
                
                loadLevel(); //Loads the next level in our levels array
                
                //Set Player Start Position
                this.setPlayerPosition();
                count = 0;
                this.transition = true;
            }
                
            //Check if next tile is NOT walkable
            else if (tileRules[nextTileY][nextTileX] != 1) { //!= means IS NOT
                //If walkable, set tx and ty (pixel postiions)
                this.tx = nextTileX * tileSize;
                this.ty = nextTileY * tileSize;

                //set this.isMoving to true to start Movement
                this.isMoving = true;
            }
        }
    }

    move() {
        //This is in our draw loop, so called move() is called every frame BUT...
        if (this.isMoving) {
            //this code block will only activate when this.isMoving = true. Otherwise, nothing happens.
            //So first, start by moving in direction set by setDirection()
            this.xPos += this.speed * this.dirX;
            this.yPos += this.speed * this.dirY;

            //Now check if player has reached targetX
            if (this.xPos === this.tx && this.yPos === this.ty) {
                //if there, stop moving and reset our variables
                this.isMoving = false;
                this.dirX = 0;
                this.dirY = 0;
            }
        }
    }

    setPlayerPosition() {
        this.tileX = levels[currentLevel].startTileX;
        this.tileY = levels[currentLevel].startTileY;
        this.xPos = levels[currentLevel].startTileX * tileSize;
        this.yPos = levels[currentLevel].startTileY * tileSize;
    }
} //End of Player Class

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