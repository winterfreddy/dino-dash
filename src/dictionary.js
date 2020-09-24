
const demoWords = ['apple', 'above', 'assume', 'asset', 'berry', 'belly', 'blue', 'beep', 'bloop', 'bull', 'bop', 'bleach',
'breach', 'beach', 'boo', 'boom', 'blast', 'ben', 'bug', 'brute', 'blaze', 'brave', 'bread',
'cat', 'cow', 'car', 'crew', 'creep', 'could', 'can', 'cigar', 'coupe', 'con', 'couch', 'chair', 'chris',
'drone', 'drift', 'drag', 'dug', 'dog', 'dub', 'draw', 'dope', 'envy', 'error', 'eons', 'evil', 'erupt', 'evade',
'flake', 'frown', 'fluke', 'fly', 'flux', 'fun', 'free', 'fewer', 'flag',
'gross', 'gender', 'greed', 'grow', 'group', 'gwen', 'grand', 'geez',
'happy', 'hound', 'harp', 'half', 'hardy', 'home', 'hope', 'hum', 'hacker', 'hush',
'ivan', 'irony', 'ike', 'ion', 'ihop', 'idea', 'ideal', 'just', 'jump', 'jot', 'jet', 'jinx', 'joust', 'jimmy', 'japan',
'king', 'kong', 'knock', 'kush', 'ken', 'kung', 'knew', 'kiss', 'kim', 'kids', 'klink', 'kind', 'karen', 'krazy',
'lion', 'lame', 'livid', 'love', 'live', 'liver', 'lore', 'lure', 'lost',
'mane', 'miami', 'merry', 'make', 'magic', 'milk', 'maze', 'more', 'mouth', 'maybe',
'none', 'neigh', 'night', 'nice', 'new', 'never', 'nord', 'other', 'open', 'oust', 'owen', 'over', 'omen',
'prune', 'pure', 'pore', 'page', 'picky', 'prick', 'prime',
'quit', 'queen', 'quiet', 'quote', 'quid', 'quo', 'quad', 'quail', 'quack', 'quake', 'quarte',
'rage', 'ruby', 'ruse', 'rake', 'ricky', 'right', 'rumor', 'rope', 'review', 'row', 'rain', 'rest',
'sight', 'super', 'sync', 'smack', 'splat', 'spore', 'spike', 'tired', 'tore', 'tire', 'turd', 'truth', 'tide', 'type', 'ted',
'unagi', 'under', 'uber', 'ufo', 'vice', 'vroom', 'vake', 'vamp', 'verse',
'win', 'wipe', 'would', 'wimp', 'what', 'words', 'whim', 'women', 'wow', 'wife', 'waze'];

function sampleWord() {
    const randomNum = Math.floor(Math.random() * demoWords.length);
    return demoWords[randomNum];
}

function customWord() {
    let customText = document.getElementById("custom-textarea").value;
    if(customText.length < 100) {
        alert("Text box needs to have at least 100 characters. Press Start when ready");
        return;
    }
    let customArray = customText.toLowerCase().replace(/,/g, '').split(" ");
    const randomNum = Math.floor(Math.random() * customArray.length);
    return customArray[randomNum];
}