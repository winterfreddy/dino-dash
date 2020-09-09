let canvasWidth = 700;
let canvasHeight = 500;

let idleDinoCharacter = new Image();
idleDinoCharacter.src = "../public/images/css_sprites_idle.png";
let walkDinoCharacter = new Image();
walkDinoCharacter.src = "../public/images/css_sprites_walk.png";
let runDinoCharacter = new Image();
let tripDinoCharacter = new Image();
let deadDinoCharacter = new Image();


let dinoIdleSpriteWidth = 7000;
let dinoWalkSpriteWidth = 7000;
let dinoRunSpriteWidth = 5600;
let dinoJumpSpriteWidth = 8400;
let dinoTripSpriteWidth = 2100;
let dinoDeadSpriteWidth = 5600;
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
let trip = false;
let dead = false;

// starting frame position
let x = 0;
let y = 0;

// what are these?
let srcX;
let srcY;

let currentFrame = 0;

let canvas = document.getElementById("myCanvas");
console.log(canvas);
canvas.width = canvasWidth;
canvas.height = canvasHeight;
let ctx = canvas.getContext('2d');

function updateFrame() {
    ctx.clearRect(x, y, dinoWidth, dinoHeight);
    if(walk) {
        currentFrame = ++currentFrame % walkFrameLength;
    } else {
        currentFrame = ++currentFrame % idleFrameLength;
    }
    srcX = currentFrame * dinoWidth;
    srcY = 0;
}

function drawImage() {
    updateFrame();
    if(walk) {
        ctx.drawImage(walkDinoCharacter, srcX, srcY, dinoWidth, dinoHeight, x, y, dinoWidth, dinoHeight);
    } else {
        ctx.drawImage(idleDinoCharacter, srcX, srcY, dinoWidth, dinoHeight, x, y, dinoWidth, dinoHeight);
    }
}

function dinoIdle() {
    idle = true;
    walk = false;
    run = false;
    trip = false;
    dead = false;
}

function dinoWalk() {
    idle = false;
    walk = true;
    run = false;
    trip = false;
    dead = false;
}

setInterval(function(){
    drawImage();
}, 80);