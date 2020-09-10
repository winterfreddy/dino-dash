
let wordCanvas = document.getElementById("wordCanvas");
wordCanvas.width = 700;
wordCanvas.height = 400;
let wCtx = wordCanvas.getContext('2d');
wCtx.font = "48px Georgia";
wCtx.fillStyle = "Black";
let word;
let counter = 0;

function startGame() {
    document.getElementById('type-input').focus();
    dinoAction('w');
    word = sampleWord();
    wCtx.fillText(word, 300, 300);
    document.addEventListener('keydown', function(event) {
        if(event.which === 13) {
            let input = document.getElementById('type-input').value;
            if(input === word) {
                wCtx.clearRect(0, 0, 700, 500);
                wCtx.fillStyle = "Green";
                wCtx.fillText(word, 300, 300);
                dinoAction('j');
                setTimeout(function() {
                    wCtx.clearRect(0, 0, 700, 500);
                    wCtx.fillStyle = "Black";
                    word = sampleWord();
                    wCtx.fillText(word, 300, 300);
                },700);
            } else if(input !== word) {
                wCtx.clearRect(0, 0, 700, 500);
                wCtx.fillStyle = "Red";
                wCtx.fillText(word, 300, 300);
                dinoAction('t');
                setTimeout(function() {
                    counter += 1;
                    if(counter > 2) {
                        wCtx.clearRect(0, 0, 700, 500);
                        dinoAction('d');
                    }
                    wCtx.clearRect(0, 0, 700, 500);
                    wCtx.fillStyle = "Black";
                    word = sampleWord();
                    wCtx.fillText(word, 300, 300);
                }, 1000);
            }
            document.getElementById('type-input').value = '';
        }
    })
}