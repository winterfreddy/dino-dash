
let wordCanvas = document.getElementById("wordCanvas");
wordCanvas.width = 700;
wordCanvas.height = 400;
let wCtx = wordCanvas.getContext('2d');
wCtx.font = "48px Georgia";
wCtx.fillStyle = "Black";
let word;

function startGame() {
    document.getElementById('type-input').focus();
    dinoAction('w');
    word = sampleWord();
    wCtx.fillText(word, 300, 300);
    document.addEventListener('keydown', function(event) {
        if(event.which === 13) {
            let input = document.getElementById('type-input').value;
            if(input === word) {
                dinoAction('j');
                wCtx.clearRect(0,0, 700, 500);
                word = sampleWord();
                wCtx.fillText(word, 300, 300);
            } else if(input === "fire") {
                dinoAction('j');
            } else if(input === "trip") {
                dinoAction('t');
            } else if(input === "dead") {
                dinoAction('d');
            } else {
                dinoAction('w');
            }
            document.getElementById('type-input').value = '';
        }
    })
}