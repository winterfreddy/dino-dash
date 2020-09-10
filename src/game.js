
function startGame() {
    document.getElementById('type-input').focus();
    dinoAction('w');
    document.addEventListener('keydown', function(event) {
        if(event.which === 13) {
            let input = document.getElementById('type-input').value;
            if(input === "fire") {
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