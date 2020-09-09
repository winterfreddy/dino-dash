let idleDinoCharacter = new Image();
idleDinoCharacter.src = "../public/images/css_sprites_idle.png";
let walkDinoCharacter = new Image();
walkDinoCharacter.src = "../public/images/css_sprites_walk.png";
let runDinoCharacter = new Image();
runDinoCharacter.src = "../public/images/css_sprites_run.png";
let jumpDinoCharacter = new Image();
jumpDinoCharacter.src = "../public/images/css_sprites_jump.png";
let tripDinoCharacter = new Image();
tripDinoCharacter.src = "../public/images/css_sprites_trip.png";
let deadDinoCharacter = new Image();
deadDinoCharacter.src = "../public/images/css_sprites_dead.png";

let canvasWidth = 2500;
let canvasHeight = 500;
let dinoWidth = 700;
let dinoHeight = 492;

let idleFrameLength = 10;
let walkFrameLength = 10;
let runFrameLength = 8;
let jumpFrameLength = 12;
let tripFrameLength = 3;
let deadFrameLength = 8;

let idle = false;
let walk = false;
let run = false;
let jump = false;
let trip = false;
let dead = false;

let x = 0;
let y = 0;
let srcX;
let srcY;

let currentFrame = 0;

let canvas = document.getElementById("myCanvas");
canvas.width = canvasWidth;
canvas.height = canvasHeight;
let ctx = canvas.getContext('2d');

function updateFrame() {
    ctx.clearRect(x, y, dinoWidth, dinoHeight);
    let frameLength;
    if(walk) {
        while(x < 500) {
            x += 1;
        }
        frameLength = walkFrameLength;
    } else if( (x >= 500) || run) {
        while(x < 1000) {
            x += 1;
        }
        frameLength = runFrameLength;
    } else if(jump) {
        frameLength = jumpFrameLength;
    } else if(trip) {
        frameLength = tripFrameLength;
    } else if(dead) {
        frameLength = deadFrameLength;
    } else {
        frameLength = idleFrameLength;
    }
    currentFrame = ++currentFrame % frameLength;
    srcX = currentFrame * dinoWidth;
    srcY = 0;
}

function drawImage() {
    updateFrame();
    let dinoCharacter;
    if(walk) {
        dinoCharacter = walkDinoCharacter;
        if(x >= 500) {
            dinoAction("r");
        }
    } else if(run) {
        dinoCharacter = runDinoCharacter;
    } else if(jump) {
        dinoCharacter = jumpDinoCharacter;
    } else if(trip) {
        dinoCharacter = tripDinoCharacter;
    } else if(dead) {
        dinoCharacter = deadDinoCharacter;
    } else {
        dinoCharacter = idleDinoCharacter;
    }
    ctx.drawImage(dinoCharacter, srcX, srcY, dinoWidth, dinoHeight, x, y, dinoWidth, dinoHeight);
}

function dinoAction(action) {
    idle = false;
    walk = false;
    run = false;
    jump = false;
    trip = false;
    dead = false;

    if(action === "i") {
        ctx.clearRect(x, y, dinoWidth, dinoHeight);
        x = 0;
        y = 0;
        idle = true;
    } else if(action === "w") {
        walk = true;
    } else if(action === "r") {
        run = true;
    } else if(action === "j") {
        jump = true;
    } else if(action === "t") {
        trip = true;
    } else if(action === "d") {
        dead = true;
    }
}

setInterval(function(){
    drawImage();
}, 80);