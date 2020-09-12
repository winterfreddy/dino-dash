// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// var firebaseConfig = {
//     apiKey: "AIzaSyA8YUXkFFc_GHfe23SGKMHb33d7giArVRs",
//     authDomain: "dino-dash-eb4b7.firebaseapp.com",
//     databaseURL: "https://dino-dash-eb4b7.firebaseio.com",
//     projectId: "dino-dash-eb4b7",
//     storageBucket: "dino-dash-eb4b7.appspot.com",
//     messagingSenderId: "908837679800",
//     appId: "1:908837679800:web:75d4af6f35e69aa6ab7a4d",
//     measurementId: "G-Q6D814E0LK"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// // firebase.analytics();
// var firestore = firebase.firestore();

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
let ul = document.createElement('ul');
ul.setAttribute('class', 'score-list');
let scorehash = {};
let listCounter = 0;
firestore.collection("scores").get().then(function(querySnapshot) {
    querySnapshot.forEach(function (doc) {
        let div = document.createElement('div');
        div.setAttribute('class', 'score-item');
        console.log("document", doc);
        console.log(doc.get("username"), " => ", doc.get("userscore"));
        scorehash[doc.get("username")] = parseFloat(doc.get("userscore"));
        let numLabel = document.createElement('label');
        numLabel.innerHTML = listCounter;
        div.appendChild(numLabel);
        listCounter += 1;
        let userLabel = document.createElement('label');
        userLabel.innerHTML = doc.get("username");
        div.appendChild(userLabel);
        let scoreLabel = document.createElement('label');
        scoreLabel.innerHTML = doc.get("userscore");
        div.appendChild(scoreLabel);
        console.log(div);
        scoreContainer.appendChild(div);
    })
    console.log(scorehash);

    // for (let score in scorehash) {

    // }
    // let li = document.createElement('li');
    // li.setAttribute('class', 'score-list-item');
    // li.innerHTML = 
})


// for (i = 0; i <= arr.length - 1; i++) {
//     var li = document.createElement('li');     // create li element.
//     li.innerHTML = arr[i];      // assigning text to li using array value.
//     li.setAttribute('style', 'display: block;');    // remove the bullets.

//     ul.appendChild(li);     // append li to ul.
// }

// cont.appendChild(ul);       // add list to the container.