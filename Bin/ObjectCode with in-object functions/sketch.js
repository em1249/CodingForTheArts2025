let player = {
    playerSprite: null,
    posX: 200,
    posY: 200,
    healthPoints: 10,

    display: function() {
        imageMode(CENTER);
        image(player.playerSprite, player.posX, player.posY);

        textSize(20);
        text(player.healthPoints, player.posX, player.posY-75);
    },

    takeDamage: function(damage) {
        player.healthPoints -= damage;
    }
}

function preload() {
    player.playerSprite = loadImage("librarian-r.png");
}

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(100);
    player.display();
}

function mouseClicked() {
    player.takeDamage(2);
}
