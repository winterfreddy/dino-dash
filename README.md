# Dino Dash

Dino Dash is a Javascript-based project that utilizes HTML and CSS to create a typing-based game. In Dino Dash, the user types the prompted words to let the dinosaur jump across the lava holes. Users can also enter their score into the top ten high scores which is stored into Firebase Firestore database. Instructions are included in the game, presented on the left sidebar on start.

You can visit the live link here: [Dino Dash](https://winterfreddy.github.io/dino-dash/)

## Technologies used in Dino Dash
* Javascript
* HTML
* CSS
* Firebase
* Github Pages

## Overview of Dino Dash Features

### Start Screen
The entry page every player will see. There's a sidebar on the left for instructions which is automatically shown on startup or on reload. Below the sidebar on the left is the choice of random demo text or random custom text input from the player. There's also the 'reset' and 'start' buttons. The game screen is on the right and takes up most of the screen estate.

![](https://github.com/winterfreddy/dino-dash/blob/master/public/images/start.png)

### In-game Screen
During the game, players have to type that matches the prompted words. Strikes are accumulated for various reasons, with one being when the player enters an incorrect word. Players have the choice to reset the game by pressing on 'reset' button in the bottom sidebar.

![](https://github.com/winterfreddy/dino-dash/blob/master/public/images/middle.png)

### Game Over Screen
After the player hits three strikes, the game is over and is presented with a stimulated modal that accepts a name to be counted on the high score list. The sidebar automatically switches to the high score tab to view previous players results. Players can hit 'submit' button to submit the score or start the game again by clicking on 'reset' button.

![](https://github.com/winterfreddy/dino-dash/blob/master/public/images/end.png)

## Technical Challenges

### Rendering the dinosaur and the lava hole at the same time

The challenge here was trying to render both the dinosaur and the moving lava hole at the same time. The first step was to have the dinosaur sprite animation working. Then the next step was wondering how to have the moving lava hole object animation. I considered two ways: one was to draw another canvas that overlaps the dinosaur sprite canvas so it would look more seamless and the other way was to utilize the same canvas and have another context variable to keep track of the moving lava hole object. I decided to go with the latter to keep my code streamlined and have less repetition of similar code. The redacted code snippet (from updateFrame() in [dinosaur.js](https://github.com/winterfreddy/dino-dash/blob/master/src/dinosaur.js)) below shows the simplification of code that makes the animation of the lava hole object and dinosaur animation work well (note: variable x refers to dinosaur x coordinate position and variable x2 refers to the moving lava hole object x coordinate position).

``` javascript
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
            .
            .
            .
        }
        if (x2 < -150) { x2 = 3000 }
        frameLength = runFrameLength;
    }
    .
    .
    .
}
```

### Timing issues when starting the game

The challenge here was to try to serve a delay between the moment the user clicks on the 'start' button on the sidebar and when the actual game logic runs. Immediately starting the game was my original intention but after many trials, it came to my realization that there should be a delay to prepare the user for the game. To remedy this, I considered doing sleep functions to create a delay but that didn't help. I've used to have code that would routinely repeat the code every certain amount of time (utilized for sprite animation) and looked for a similar functionaltiy to add delay. I found setTimeout and throughly tested to ensure that it would stimulate a delay as shown in the redacted code snippet below from [game.js](https://github.com/winterfreddy/dino-dash/blob/master/src/game.js).

``` javascript
function startGame() {
    document.getElementById("ready-text").style.display = "block";
    setTimeout(function() {
        document.getElementById("ready-text").style.display = "none";
        document.getElementById("go-text").style.display = "block";
    }, 1000)
    setTimeout(function() {
        document.getElementById("go-text").style.display = "none";
        .
        .
        .
    }, 2000);
}
```

## For Future Releases
* Improve dinosaur animation
* Adjust timing of words in correlation to lava hole
* Adjust restarting the game
* Implement X/Y scroll lock on page
