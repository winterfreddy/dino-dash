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
let endDinoCharacter = new Image();
endDinoCharacter.src = "../public/images/css_sprites_end.png";

let canvasWidth = 2500;
let canvasHeight = 550;
let dinoWidth = 700;
let dinoHeight = 492;

let idleFrameLength = 10;
let walkFrameLength = 10;
let runFrameLength = 8;
let jumpFrameLength = 12;
let tripFrameLength = 3;
let deadFrameLength = 8;
let endFrameLength = 3;

let idle = false;
let walk = false;
let run = false;
let jump = false;
let trip = false;
let dead = false;
let over = false;

let x = 0;
let x2 = 3000;
let y = 0;
let srcX;
let srcY;
let radiusX = 20;
let radiusY = 150;

let currentFrame = 0;
let gameOver = false;
let jumpOnce = false;
let tripOnce = false;

let canvas = document.getElementById("myCanvas");
canvas.width = canvasWidth;
canvas.height = canvasHeight;
let ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.ellipse(x2, 500, radiusX, radiusY, Math.PI / 2, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "rgb(255,103,0)";
ctx.fill();

function updateFrame() {
    ctx.clearRect(x, y, dinoWidth, dinoHeight);
    ctx.clearRect(x2, 400, 200, radiusY*2);
    let frameLength;
    if(walk) {
        while(x < 500) { x += 1; }
        frameLength = walkFrameLength;
    } else if( (x >= 500) || run) {
        while(x < 1000) { x += 1; }
        x2 -= 85;
        if(!pass && x2 < 1400 && x2 > 1300) {
            wCtx.clearRect(0, 0, 700, 500);
            wCtx.fillStyle = "Red";
            wCtx.fillText(word, 300, 300);
            dinoAction('t');
            counter += 1;
            strikeCounter(counter);
            if(counter > 2) {
                endTime = new Date().getTime();
                wCtx.clearRect(0, 0, 700, 500);
                dinoAction('d');
                endGame();
            }
            wCtx.clearRect(0, 0, 700, 500);
            wCtx.fillStyle = "Black";
            wCtx.fillText(word, 300, 300);
        }
        if (x2 < -150) { x2 = 3000 }
        frameLength = runFrameLength;
    } else if(jump) {
        frameLength = jumpFrameLength;
    } else if(trip) {
        frameLength = tripFrameLength;
    } else if(dead) {
        frameLength = deadFrameLength;
    } else if(over) {
        frameLength = endFrameLength;
    } else {
        frameLength = idleFrameLength;
    }
    currentFrame = ++currentFrame % frameLength;
    if(dead && (currentFrame === 7)) { gameOver = true; }
    if(jump && (currentFrame === 7)) { jumpOnce = true; }
    if(trip && (currentFrame === 2)) { tripOnce = true; }
    srcX = currentFrame * dinoWidth;
    srcY = 0;
}

function drawImage() {
    updateFrame();
    let dinoCharacter;
    if(walk) {
        dinoCharacter = walkDinoCharacter;
        if(x >= 500) { dinoAction("r"); }
    } else if(run) {
        dinoCharacter = runDinoCharacter;
    } else if(jump) {
        dinoCharacter = jumpDinoCharacter;
        if(jumpOnce) {
            jumpOnce = false;
            pass = false;
            dinoAction('r');
        }
    } else if(trip) {
        dinoCharacter = tripDinoCharacter;
        if (tripOnce) {
            tripOnce = false;
            dinoAction('r');
        }
    } else if(dead) {
        dinoCharacter = deadDinoCharacter;
        if(gameOver) { dinoAction("o"); }
    } else if(over) {
        dinoCharacter = endDinoCharacter;
    } else {
        dinoCharacter = idleDinoCharacter;
    }
    ctx.drawImage(dinoCharacter, srcX, srcY, dinoWidth, dinoHeight, x, y, dinoWidth, dinoHeight);
    ctx.beginPath();
    ctx.ellipse(x2, 500, radiusX, radiusY, Math.PI / 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "rgb(255,103,0)";
    ctx.fill();
}

function dinoAction(action) {
    idle = false;
    walk = false;
    run = false;
    jump = false;
    trip = false;
    dead = false;
    over = false;

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
    } else if(action === "o") {
        over = true;
    }
}

setInterval(function(){
    drawImage();
}, 80);