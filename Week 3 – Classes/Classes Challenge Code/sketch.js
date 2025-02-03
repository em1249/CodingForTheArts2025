//VARIABLES
let librarians = []; //empty array to store librarian objects
let pinkLibrarianSprite; //empty variable to store librarian sprite
let numLibrarians = 20; //number of librarians we'll spawn
let size = 48; //size of each librarian on screen
let hitPoints = 5;
let textPaddingX = size/2;
let textPaddingY = -2;

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
                                        size, //passes the size we assigned up top to the new object.
                                        hitPoints, // adds hitpoints to object
                                        textPaddingX, //puts hitpoints Text closer to centre of object on x axis
                                        textPaddingY); //puts hitponits Text slightly above the object on the y axis
    }
}

function draw() {
    background(220);

    for (x = 0; x < numLibrarians; x++) { //for loop works the same as the one above
       // if (librarians[x].hitPoints > 0) { //Checks if librarian at index x of librarians array has more than 0 hitpoints
            librarians[x].display();
       // }
    }
}

function mouseClicked() { //code called when player clicks
    for (x = 0; x < numLibrarians; x++) { //for loop to check each librarian object again
        if (//First two lines checks if the position of the mouse on the x axis is within the bounds of each librarian on the x axis
            mouseX > librarians[x].xPos
            && mouseX < librarians[x].xPos + librarians[x].size
            //Second two lines checks if the position of the mouse on the y axis is within the bounds of each librarian on the y axis
            && mouseY > librarians[x].yPos
            && mouseY < librarians[x].yPos + librarians[x].size) {
                //If mouseX is within the bounds of librarian[x] on the x axis AND mouseY is within the bounds of librarian[x] on the y axis,
                //damage librarian[x].
                librarians[x].damage(x, 2);

        }
    }
}

class Character {
    constructor(sprite, xPos, yPos, size, hitPoints, textPaddingX, textPaddingY) {
        this.sprite = sprite;
        this.xPos = xPos;
        this.yPos = yPos;
        this.size = size; // new variable we're passing into our objects
        this.hitPoints = hitPoints;
        this.textPaddingX = textPaddingX;
        this.textPaddingY = textPaddingY;
    }

    display() {
        //Displays Character object on screen
        image(this.sprite, this.xPos, this.yPos, this.size, this.size); //NOTE THAT THIS.SIZE IS CALLED TWICE!!

        textAlign(CENTER) //Sets hitPoints text to display in centre; looks neater if you have more than one digit
        text(this.hitPoints, this.xPos + this.textPaddingX, this.yPos + this.textPaddingY);
    }

    damage(index, damage) {
        this.hitPoints -= damage;

        if (this.hitPoints < 0) {
            librarians.splice(index, 1); //splice removes an element from an array
            numLibrarians--; //but splcing the array means our numLibrarians value is incorrect, and leads to errors if
                             //we don't change it, as the for loop is still running 50 times. Therefore, we need to -1 from numLibrarians
                             //each time we splice (numLibrarians-- means take one away from the value of numLibrarians).
        }
    }
}


/*
THE FOLLOWING CODE IS FOR THOSE WISHING TO UNDERSTAND HOW TO RUN FUNCTIONS AS PARAMETERS, SEE THE LAST PART OF THE NOTION PAGE
FOR MORE INFO.

TO RUN THIS CODE, FOLLOW THE ALL CAPS INSTRTUCTIONS ABOVE EACH FUNCTION

NOTE: THIS CODE IS COMMENTED OUT, SO MAKE SURE TO NOT INCLUDE THE SLASH-ASTERICK AT THE START AND END WHEN COPYING AND PASTING!
I SUGGEST INCLUDING THE // CMOMMENTS IN EACH FUNCTION AS IT WILL HELP EXPLAIN IT, AND WILL BE EASIER TO READ WHEN IT'S IN YOUR CODE
PROPERLY.


COPY AND PASTE ME OVER DRAW:
function draw() {
    background(220);

    //The => is called an arrow function. What it's doing here is creating a temporary variable called 'librarian' (notice it's not
    //plural!), and saying "go inside the object in that variable and find a function calld displaySprite()". So when processDisplay()
    //gets to func(librarians[x]), it knows that it should look inside the librarian stored in librarians at index x and find and run
    //a function called displaySprite(). It will do this for every single librarian before doing it again for displayHitPoints().
    processDisplay(librarian => librarian.displaySprite())
    processDisplay(librarian => librarian.displayHitPoints())
}

COPY AND PASTE ME AS A NEW FUNCTION BELOW DRAW
function processDisplay(func) { //func is the parameter for our function
    for (x = 0; x < numLibrarians; x++) { //for loop works the same as the one above
        if (librarians[x].hitPoints > 0) { //Checks if librarian at index x of librarians array has more than 0 hitpoints
            func(librarians[x]) //runs whatever function we called above. This is an alternative way of writing functions
        }
    }
}

YOU WILL ALSO NEED TO SEPARATE THE DISPLAY FUNCTION IN YOUR CHARACTER CLASS INTO TWO NEW FUNCTIONS, SO COPY AND PASTE
THESE TWO FUNCTIONS IN PLACE OF YOUR CURRENT DISPLAY() FUNCTION:
    displaySprite() {
        //Displays Character object on screen
        image(this.sprite, this.xPos, this.yPos, this.size, this.size); //NOTE THAT THIS.SIZE IS CALLED TWICE!!
    }

    displayHitPoints() {
        //Displays hitpoints
        textAlign(CENTER) //Sets hitPoints text to display in centre; looks neater if you have more than one digit
        text(this.hitPoints, this.xPos + this.textPaddingX, this.yPos + this.textPaddingY);
    }


    --------------------

    THE CHALLENGE ALSO ASKED YOU TO SIMPLY STOP DISPLAYING A CHARACTER ONCE IT REACHED 0 HITPOINTS, BUT SOME STUDENTS
    WENT BEYOND THIS AND TRIED TO USE THE SPLICE() FUNCTION TO REMOVE AN OBJECT ENTIRELY. HERE'S HOW YOU WOULD DO THIS:

    ALL WE NEED TO DO IS MODIFY THE DAMAGE FUNCTION WITH AN EXTRA PARAMETER AND TWO MORE LINES OF CODE:

    CHANGE THE DAMAGE CODE TO:

        damage(damage, index) {
        this.hitPoints -= damage;

        if (this.hitPoints < 0) {
            librarians.splice(index, 1); //splice removes an element from an array
            numLibrarians--; //but splcing the array means our numLibrarians value is incorrect, and leads to errors if
                             //we don't change it, as the for loop is still running 50 times. Therefore, we need to -1 from numLibrarians
                             //each time we splice (numLibrarians-- means take one away from the value of numLibrarians).
        }
    }


    AND THEN WHEN YOUC ALL DAMAGE IN THE FOR LOOP, PUT x AS THE SECOND PARAMETER VALUE, AND IT SHOULD WORK!
*/