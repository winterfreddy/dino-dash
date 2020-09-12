
function openTab(e, tabName) {

    let tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    let tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    e.currentTarget.className += " active";
}

let scoreContainer = document.getElementById("high-score-list");
let checkCounter = 0;
let sortedArray;

function getScores() {
    let scorehash = {};
    scoreContainer.innerHTML = "";
    firestore.collection("scores").onSnapshot(function(querySnapshot) {
        querySnapshot.forEach(function (doc) {
            scorehash[doc.get("username")] = parseFloat(doc.get("userscore"));
        })
    
        let sorted = [];
        for (let score in scorehash) {
            sorted.push([score, scorehash[score]]);
        }
    
        sorted.sort(function(a, b) {
            return b[1] - a[1];
        })
        sorted = sorted.slice(0,10);

        sortedArray = sorted;
        if(sortedArray === sorted && checkCounter === 0) {
            checkCounter += 1;
            sorted.forEach( (entry, index) => {
                let div = document.createElement('div');
                div.setAttribute('class', 'score-item');
                let numLabel = document.createElement('label');
                numLabel.innerHTML = index+1;
                div.appendChild(numLabel);
                let userLabel = document.createElement('label');
                userLabel.innerHTML = entry[0];
                div.appendChild(userLabel);
                let scoreLabel = document.createElement('label');
                scoreLabel.innerHTML = entry[1];
                div.appendChild(scoreLabel);
                scoreContainer.appendChild(div);
            })
        } else {
            checkCounter = 0;
        }
    })
}

getScores();