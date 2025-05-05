/* NOTES
This code adds some animation to our player. Currently, it is only on the left and right axis because I haven't
had time to draw sprites for up and down, but it should work in any direction!
*/


//INTIALISE PLAYER VARIABLES
let player;
let playerSprites = {};
let playerSpeed = 5;

//INITIALISE TILEMAP VARIABLES
let tileMap = []; //This is an array we will store our tiles in later
let tilesX = 10; //This will be how many tiles there will be on the x axis (horizontally)
let tilesY = 10; //This will be how many tiles there will be on the y axis (vertically)
let tileSize = 50; //How many pixels across each tile will be.
let textures = []; //value to store our textures for the graphics Map

//TIMER
let lastCount;
let timerMax = 10;
let count = 0;


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

//SETS COLLISION VARIABLES
let tileRules = [ 
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

     //RULES
     // 0 = walkable
     // 1 = collision/unwalkable
 ];

function preload() {
    textures[0] = loadImage("grassy.png");
    textures[1] = loadImage("stone.png");
    
    //CHANGED: I put all my sprites into an object called playerSprites and then each direction is an array.
    //each direction has its own sprites for when walking. Sprite at index 0 is default when still. Any further sprites
    //will be shown in the order they are placed in the array. You could have a default sprite and a seperate walking animation
    //if you wanted, but you would need to modify how my animation code calls a specific index.
    playerSprites = {
        up: [loadImage('art/starmer_up_walk/starmer_up_walk0.png'), loadImage('art/starmer_up_walk/starmer_up_walk1.png'), loadImage('art/starmer_up_walk/starmer_up_walk2.png'), loadImage('art/starmer_up_walk/starmer_up_walk3.png')],
        down: [loadImage('art/starmer_down_walk/starmer_down_walk0.png'), loadImage('art/starmer_down_walk/starmer_down_walk1.png'), loadImage('art/starmer_down_walk/starmer_down_walk2.png'), loadImage('art/starmer_down_walk/starmer_down_walk3.png')],
        left: [loadImage('art/starmer_left_walk/starmer_left_walk0.png'), loadImage('art/starmer_left_walk/starmer_left_walk1.png'), loadImage('art/starmer_left_walk/starmer_left_walk2.png'), loadImage('art/starmer_left_walk/starmer_left_walk3.png')],
        right: [loadImage('art/starmer_right_walk/starmer_right_walk0.png'), loadImage('art/starmer_right_walk/starmer_right_walk1.png'),loadImage('art/starmer_right_walk/starmer_right_walk2.png'),loadImage('art/starmer_right_walk/starmer_right_walk3.png')],
    }
}

function setup() {
    lastCount = count;

    noSmooth();

    createCanvas(500, 500);

    let tileID = 0 //Sets ID for each tile

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

    //Create Player
    player = new Player(playerSprites, 3, 3, tileSize, tileRules);
}

function draw() {
    background(0)
    for (let tileX = 0; tileX < tilesX; tileX++) {
        for (let tileY = 0; tileY < tilesY; tileY++) {
            tileMap[tileX][tileY].display();
            tileMap[tileX][tileY].debugGrid();
        }
    }

    
    player.setDirection();
    player.move();
    player.animateSprite();
    player.display();

    count++; //NEW
}

class Player{
    constructor(sprites, startX, startY, tileSize, tileRules) {
        //PLAYER SPRITES
        this.sprites = sprites; //CHANGED: Sprite is now an object called sprites, containing each direction as an array.
        this.spriteDirection = this.sprites.down; //CHANGED: Each direction now has an array associated with it
        this.spriteIndex = 0; //CHANGED: This is the index of the sprite in each array that will actually display. 
        this.animation = false;

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
        this.speed = 5;

        //TILE DATA
        this.tileSize = tileSize;
        this.tileRules = tileRules;
    }

    display() {
        //CHANGED: So now, display checks waht the current direction is, gets taht array, and then displays whatever sprite is at the same
        //index as this.spriteIndex
        noSmooth();
        image(this.spriteDirection[this.spriteIndex], this.xPos, this.yPos, this.tileSize, this.tileSize)
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
                this.spriteDirection = this.sprites.up; //CHANGED: Grab the array associated with each direction
            }

            if (keyIsDown(down)) {
                this.dirX = 0;
                this.dirY = 1;
                this.spriteDirection = this.sprites.down;
            }

            if (keyIsDown(left)) {
                this.dirX = -1;
                this.dirY = 0;
                this.spriteDirection = this.sprites.left;
            }

            if (keyIsDown(right)) {
                this.dirX = 1;
                this.dirY = 0;
                this.spriteDirection = this.sprites.right;
            }

            this.checkTargetTile()
        }
    }

    checkTargetTile() {
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
                
            //Check if next tile is NOT walkable
            if (tileRules[nextTileY][nextTileX] != 1) { //!= means IS NOT
                //If walkable, set tx and ty (pixel postiions)
                this.tx = nextTileX * tileSize;
                this.ty = nextTileY * tileSize;

                if (this.tileX === nextTileX && this.tileY === nextTileY) {
                    this.isMoving = false; //CHANGED: I added this as I noticed that our current code technially will set isMoving to true for one
                }
                else {
                //set this.isMoving to true to start Movement
                    this.isMoving = true;
                }


            }
        } else {
            this.dirX = 0;
            this.dirY = 0;
        }
    }

    move() {
        //CHANGED: added new variables here to get current xPos and yPos and storing it.
        let lastXPos = this.xPos;
        let lastYPos = this.yPos;

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

        /*CHANGED
        In the new version, I store the values of xPos and yPos BEFORE the 'if (this.isMoving)' statement is called. The 
        'if (this.isMoving)' code block is what actually changes the value of xPos and yPos, so now we can check if that if statement
        has been called and therefore if xPos and yPos have been changed. If it has, it will set our new bool ('this.animation') to true
        as the character is currently moving. If they're the same, it's false.

        We could tie this to this.isMoving, but this causes animation errors due to how the movement code works. So technically, this code
        is handling animation purely based on whetehr xPos or yPos have changed between the start and end of the move() function.
        */

        if (lastXPos != this.xPos || lastYPos != this.yPos) {
            this.animation = true; //if xPos and yPos have changed during move, start animation (as player is moving)
        }
        else {
            this.animation = false; //if xPos and yPos are the same at the start and end move, stop animation (as player is not moving)
        }
    }

    animateSprite() { //CHANGED: NEW FUNCTION!
        //If animation is true, it starts our timer, and implements this.spriteIndex every 10 frames.
        if (this.animation) {
            if (count - lastCount >= timerMax) {
                lastCount = count;
                this.spriteIndex++;
                if (this.spriteIndex >= this.spriteDirection.length) this.spriteIndex = 0; //this checks if this.spriteIndex is bigger than the direciotn array
            }
        }
        else { //if this.animation = false, it sets our sprite back to 0.
            this.spriteIndex = 0;
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
