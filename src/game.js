
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
let wpm;
let gameOver = false;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyA8YUXkFFc_GHfe23SGKMHb33d7giArVRs",
    authDomain: "dino-dash-eb4b7.firebaseapp.com",
    databaseURL: "https://dino-dash-eb4b7.firebaseio.com",
    projectId: "dino-dash-eb4b7",
    storageBucket: "dino-dash-eb4b7.appspot.com",
    messagingSenderId: "908837679800",
    appId: "1:908837679800:web:75d4af6f35e69aa6ab7a4d",
    measurementId: "G-Q6D814E0LK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
var firestore = firebase.firestore();


function startGame() {
    setTimeout(function() {
        let customRadio = document.getElementById("custom").checked;
        document.getElementById("gamescreen").style.opacity = "1.0";
        document.getElementById("end-game").style.display = "none";
        document.getElementById('type-input').focus();
        dinoAction('w');
        startTime = new Date().getTime();
        // while(gameOver === false) {
        //     //pick a word
        //     word = customRadio ? customWord() : sampleWord();

        //     //clear previous canvas
        //     wCtx.clearRect(0, 0, 700, 500);
        //     wCtx.fillStyle = "Black";
        //     wCtx.fillText(word, 300, 300);

        //     //listen for specific keydown event
        //     document.addEventListener('keydown', function(event) {
        //         if(event.which === 13) { //listen for 'enter' key
        //             let input = document.getElementById('type-input').value;
        //             if(input === word && x2 > 1400 && x2 < 1800) { // if input is correct and within jumping bounds
        //                 pass = true;
        //                 wordCounter += 1;

        //                 //show verification word was entered correctly
        //                 wCtx.clearRect(0, 0, 700, 500);
        //                 wCtx.fillStyle = "Green";
        //                 wCtx.fillText(word, 300, 300);
        //                 dinoAction('j');

        //             } else if( input !== word || x2 > 1800) { // if input is not correct or entered too early
        //                 pass = true;
                        
        //                 //show verification word was entered incorrectly
        //                 wCtx.clearRect(0, 0, 700, 500);
        //                 wCtx.fillStyle = "Red";
        //                 wCtx.fillText(word, 300, 300);
        //                 dinoAction('t');
        //                 counter += 1;
        //                 strikeCounter(counter);
        //                 setTimeout(function() {
        //                     if (counter > 2) {
        //                         endTime = new Date().getTime();
        //                         wCtx.clearRect(0, 0, 700, 500);
        //                         dinoAction('d');
        //                         endGame();
        //                     }
        //                 }, 500);
        //             }
        //             document.getElementById('type-input').value = '';
        //         }
        //     })
        // }
        word = customRadio ? customWord() : sampleWord();
        console.log(word);
        wCtx.fillText(word, 300, 300);
        document.addEventListener('keydown', function(event) {
            if(event.which === 13) {
                let input = document.getElementById('type-input').value;
                console.log(input);
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
                    },1000);
                } else if(input !== word || x2 > 1800) {
                    pass = true;
                    wCtx.clearRect(0, 0, 700, 500);
                    wCtx.fillStyle = "Red";
                    wCtx.fillText(word, 300, 300);
                    dinoAction('t');
                    setTimeout(function() {
                        console.log(input);
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
                        console.log(word)
                        wCtx.fillText(word, 300, 300);
                    }, 1000);
                }
                document.getElementById('type-input').value = '';
            }
        })

    }, 1000);
}

function endGame() {
    document.getElementById("openScore").click();
    document.getElementById("score-text").innerHTML = wordCounter;
    calculateWPM();
    document.getElementById("gamescreen").style.opacity = "0.5";
    document.getElementById("end-game").style.display = "block";
    document.getElementById('scorename').focus();
}

function resetGame() {
    dinoAction('i');
    document.getElementById("gamescreen").style.opacity = "1.0";
    document.getElementById("end-game").style.display = "none";
    document.getElementById('type-input').value = '';
    counter = 0;
    wordCounter = 0;
    pass = false;
    // gameOver = false;

    //clear canvas
    wCtx.clearRect(0, 0, 700, 500);
    ctx.clearRect(x2-200, 400, 400, radiusY * 2);
    x2 = 3000;

    //clear strikes
    document.getElementById("strike-one").style.color = "black";
    document.getElementById("strike-two").style.color = "black";
    document.getElementById("strike-three").style.color = "black";

    //reset the hole
    ctx.beginPath();
    ctx.ellipse(x2, 500, radiusX, radiusY, Math.PI / 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "rgb(255,103,0)";
    ctx.fill();
}

function restartGame() {
    resetGame();
    setTimeout(function() {
        startGame();
    }, 500);
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
    wpm = ((wordCounter * 60)/seconds).toFixed(2);
    document.getElementById("wpm-text").innerHTML = wpm;
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

function submitScore() {
    const docRef = firestore.collection("scores");
    let name = document.getElementById("scorename").value;
    docRef.add({
        username: name,
        userscore: wordCounter
    }).then(function() {
        console.log("score is saved!");
    }).catch(function(error) {
        console.log("Got an error: ", error);
    })
    getScores();
    document.getElementById("scorename").value = "";
}