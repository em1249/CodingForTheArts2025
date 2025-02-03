let textOne = "Hello, welcome to my p5 project.";
let textTwo = "This is a demonstration of a class system.";
let textThree = "You can store dialogue in an object.";
let textFour = "This sketch is set up to loop through some text!"

let dialogueStore = [];
let currentDialogue = 0;

function setup() {
    createCanvas(400, 400);

    //Create dialogue object and store inside dialogeStore array
    dialogueStore[0] = new Dialogue(textOne, width/2, height/2)
    dialogueStore[1] = new Dialogue(textTwo, width/2, height/2)
    dialogueStore[2] = new Dialogue(textThree, width/2, height/2)
    dialogueStore[3] = new Dialogue(textFour, width/2, height/2)
}

function draw() {
    background(220);
    
    textAlign(CENTER) //I've aligned text to the centre to make it look nicer.
    text(dialogueStore[currentDialogue].text, 
            dialogueStore[currentDialogue].xPos, 
            dialogueStore[currentDialogue].yPos)
    //Our text function works by looking inside the dialogueStore array. We set currentDialogue to 0 at the start.
    //Each time the player clicks the mouse, the currentDialogue goes up by 1, so the text() function reads the data
    //From the object stored in the next array!
}

function mouseClicked() {

    //This if statement checks if the currentDialogue is longer than the lenght of the array. Annoyingly, the .length
    //bit returns the number of objects inside our array. Annoying, while the index starts counting from 0, the array
    //starts counting from 1, so we have to check against dialogueStore.length - 1.
    if (currentDialogue >= dialogueStore.length - 1){ //if currentDialogue is more than or equal to the length of our array...
        currentDialogue = 0; //reset it back to 0.
    }
    else {
        currentDialogue++; //if it is less than dialogueArray.length, then add 1 to currentDialogue to get the next dialogue
    }
    
}

class Dialogue { //Constructing a class
    constructor(text, xPos, yPos) { //The constructor takes some variables when we create an instance of this class in setup()...
        this.text = text; //... and then creates a variable inside the instance of the class (which is instantiated as an object).
        this.xPos = xPos; //this. says "create a variable called xPos and store the value passed to the constructor as xPos inside it"
        this.yPos = yPos;
    }
}