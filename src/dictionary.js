
const demoWords = ['apple', 'ability', 'acrobat', 'across', 'autocross', 'autonomy', 'autonomous', 'australia', 'apricot',
'above', 'appearance', 'allowance', 'assumption', 'assume', 'acknowledge', 'acquire', 'acquisition', 'asset', 'abbreviation',
'banana', 'barnacles', 'berry', 'brevity', 'belly', 'bollock', 'blue', 'beep', 'bloop', 'berlin', 'bull', 'bop', 'bleach',
'breach', 'beach', 'boo', 'boom', 'blast', 'ben', 'bug', 'brazen', 'brute', 'brutal', 'blaze', 'brave', 'bread', 'befriend',
'carwow', 'carrot', 'cat', 'cow', 'car', 'crew', 'creep', 'creation', 'could', 'can', 'company', 'convex', 'concave',
'cigar', 'coffee', 'coupe', 'con', 'comfort', 'couch', 'chair', 'chaise', 'chris', 'chalet', 'chariot', 'cabinet',
'dragon', 'drone', 'drift', 'drag', 'dug', 'deduct', 'destruct', 'distract', 'distance', 'dog', 'dub', 'draw', 'dope',
'endure', 'ensure', 'envision', 'envy', 'error', 'encore', 'eradicate', 'eons', 'evil', 'erupt', 'evade', 'europe',
'foreign', 'flake', 'flower', 'frown', 'fluke', 'fly', 'fragment', 'flux', 'fun', 'free', 'fewer', 'frequent', 'flag',
'gross', 'gender', 'greed', 'grow', 'greatness', 'group', 'grieve', 'ground', 'gwen', 'grand', 'garden', 'geez',
'happy', 'hound', 'harp', 'half', 'harmony', 'hardy', 'hammock', 'home', 'hope', 'hectic', 'hum', 'hacker', 'hush',
'iguana', 'ignore', 'ivan', 'invoke', 'irony', 'insure', 'ike', 'ion', 'ihop', 'idea', 'ideal', 'ironic', 'impasse', 
'jaguar', 'justify', 'just', 'journey', 'jump', 'jasmine', 'jot', 'jet', 'jester', 'jinx', 'joust', 'jimmy', 'japan',
'king', 'kong', 'knock', 'kush', 'ken', 'kung', 'knew', 'kiss', 'kim', 'kids', 'klink', 'kind', 'karen', 'krazy',
'lion', 'lame', 'livid', 'lizard', 'lionel', 'love', 'live', 'license', 'liver', 'likewise', 'lore', 'lure', 'lost',
'mane', 'miami', 'majesty', 'maroon', 'merry', 'make', 'magic', 'mortor', 'milk', 'maze', 'more', 'mouth', 'maybe',
'nonsense', 'none', 'neigh', 'night', 'nevermore', 'norway', 'nice', 'novice', 'nominee', 'new', 'never', 'nord',
'opulent', 'orchid', 'other', 'open', 'oust', 'orange', 'owen', 'ornery', 'opposite', 'over', 'ordinance', 'omen',
'purple', 'perfect', 'prune', 'pure', 'pore', 'professor', 'promise', 'page', 'pollock', 'picky', 'prick', 'prime',
'quit', 'quotient', 'queen', 'quiet', 'quote', 'quid', 'quo', 'quad', 'quality', 'quail', 'quack', 'quake', 'quarte',
'rage', 'ruby', 'ruse', 'rake', 'ricky', 'right', 'rumor', 'rope', 'review', 'rearview', 'row', 'rain', 'rest',
'salvage', 'sight', 'super', 'sync', 'sleight', 'smooth', 'smack', 'splat', 'spore', 'spike', 'strike', 'stream',
'turing', 'tired', 'tore', 'tire', 'turd', 'truth', 'twinkie', 'triumph', 'trophy', 'tide', 'type', 'ted', 'tedious',
'unicorn', 'unique', 'unagi', 'university', 'under', 'umpire', 'understand', 'uber', 'unlike', 'ubisoft', 'ufo',
'victory', 'viking', 'violet', 'vice', 'vroom', 'valley', 'volleyball', 'vake', 'vampire', 'vamp', 'verse', 'validate',
'win', 'wonder', 'wipe', 'would', 'wimp', 'what', 'words', 'whimsical', 'whim', 'women', 'wow', 'wife', 'waze'];

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