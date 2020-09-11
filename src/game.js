
let wordCanvas = document.getElementById("wordCanvas");
wordCanvas.width = 700;
wordCanvas.height = 400;
let wCtx = wordCanvas.getContext('2d');
wCtx.font = "48px Georgia";
wCtx.fillStyle = "Black";
let word;
let counter = 0;
let wordCounter = 0;
let startTime;
let endTime;
let pass = false;

function startGame() {
    let customRadio = document.getElementById("custom").checked;
    document.getElementById("gamescreen").style.opacity = "1.0";
    document.getElementById("end-game").style.display = "none";
    document.getElementById('type-input').focus();
    dinoAction('w');
    startTime = new Date().getTime();
    word = customRadio ? customWord() : sampleWord();
    wCtx.fillText(word, 300, 300);
    document.addEventListener('keydown', function(event) {
        if(event.which === 13) {
            let input = document.getElementById('type-input').value;
            if(input === word && x2 > 1400 && x2 < 1700) {
                pass = true;
                wordCounter += 1;
                wCtx.clearRect(0, 0, 700, 500);
                wCtx.fillStyle = "Green";
                wCtx.fillText(word, 300, 300);
                dinoAction('j');
                setTimeout(function() {
                    wCtx.clearRect(0, 0, 700, 500);
                    wCtx.fillStyle = "Black";
                    word = customRadio ? customWord() : sampleWord();
                    wCtx.fillText(word, 300, 300);
                },700);
            } else if(input !== word || x2 > 1700) {
                wCtx.clearRect(0, 0, 700, 500);
                wCtx.fillStyle = "Red";
                wCtx.fillText(word, 300, 300);
                dinoAction('t');
                setTimeout(function() {
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
                    word = customRadio ? customWord() : sampleWord();
                    wCtx.fillText(word, 300, 300);
                }, 1000);
            }
            document.getElementById('type-input').value = '';
        }
    })
}

function endGame() {
    calculateWPM();
    document.getElementById("gamescreen").style.opacity = "0.5";
    document.getElementById("end-game").style.display = "block";
    document.getElementById('scorename').focus();
}

function calculateWPM() {
    document.getElementById("strike-one").style.color = "black";
    document.getElementById("strike-two").style.color = "black";
    document.getElementById("strike-three").style.color = "black";
    let difference = endTime - startTime;
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    if(minutes > 0) {
        seconds += (minutes * 60);
    }
    let wpm = (wordCounter * 60)/seconds;
    document.getElementById("wpm-text").innerHTML = wpm.toFixed(2);
}

function strikeCounter(counter) {
    if(counter === 1) {
        document.getElementById("strike-one").style.color = "red";
    } else if(counter === 2) {
        document.getElementById("strike-two").style.color = "red";
    } else if( counter === 3) {
        document.getElementById("strike-three").style.color = "red";
    }
}