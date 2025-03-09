
class Enemy {
    constructor(sprite, tileX, tileY, tileSize, tileRules) {
        //Sprites
        this.sprite = sprite;

        //Position
        this.tileX = tileX;
        this.tileY = tileY;
        this.xPos = tileX * tileSize;
        this.yPos = tileY * tileSize;

        //Info
        this.tileSize = tileSize;
        this.tileRules = tileRules;

        //Movement
        this.tx = tileX;
        this.ty = tileY;
        this.isMoving = false;
        this.speed = 2.5;
        this.dirX = 0;
        this.dirY = 0;

        //Target Player
        this.alert = false;
    }

    display() {
        image(this.sprite, this.xPos, this.yPos, this.tileSize, this.tileSize)
    }

    checkAlert() {
        //Calculate tile position of currentTile
        this.tileX = Math.floor(this.xPos / this.tileSize);
        this.tileY = Math.floor(this.yPos / this.tileSize);

        if (dist(this.tileX, this.tileY, player.tileX, player.tileY) < 5) {
            this.alert = true;
        } else {
            this.alert = false;
        }
        console.log(dist(this.tileX, this.tileY, player.tileX, player.tileY))
        console.log(this.alert)
    }

    chase() {
        if (this.alert && !this.isMoving) {
            
            if (this.tileX != player.tileX) {
                if (this.tileX < player.tileX) this.dirX = 1;
                else if (this.tileX > player.tileX) this.dirX = -1;
                
            } else 
            {this.dirX = 0;

                if (this.tileY != player.tileY) {
                    if (this.tileY < player.tileY) this.dirY = 1;
                    else if (this.tileY > player.tileY) this.dirY = -1;
                    else this.dirY = 0
            }
        }

            this.checkTargetTile()
        }
    }

    checkTargetTile() {

        //Calculate tile coordinates of next Tile;
        let nextTileX = this.tileX + this.dirX;
        let nextTileY = this.tileY + this.dirY;

        //Check if nextTileX and nextTileY are both inbounds
        //Remember && means AND (i.e. if ALL conditions are true)
        if (nextTileX >= 0 &&       //left side of map
            nextTileX < tilesX &&   //right side of map
            nextTileY >= 0 &&       //top of map
            nextTileY < tilesY) {  //bottom of map 

            if (tileRules[nextTileY][nextTileX] === 0) { 
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
}