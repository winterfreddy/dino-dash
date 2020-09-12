
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
let scorehash = {};

firestore.collection("scores").get().then(function(querySnapshot) {
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

    sorted.forEach( (entry, index) => {
        let div = document.createElement('div');
        div.setAttribute('class', 'score-item');
        let numLabel = document.createElement('label');
        numLabel.innerHTML = index;
        div.appendChild(numLabel);
        let userLabel = document.createElement('label');
        userLabel.innerHTML = entry[0];
        div.appendChild(userLabel);
        let scoreLabel = document.createElement('label');
        scoreLabel.innerHTML = entry[1];
        div.appendChild(scoreLabel);
        scoreContainer.appendChild(div);
    })
})