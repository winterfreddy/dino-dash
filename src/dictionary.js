
const demoWords = ['apple', 'ability', 'acrobat', 'across', 'autocross', 'autonomy', 'autonomous', 'australia', 'apricot',
'above', 'appearance', 'allowance', 'assumption', 'assume', 'acknowledge', 'acquire', 'acquisition', 'asset', 'abbreviation',
'banana', 'barnacles', 'berry', 'brevity', 'belly', 'bollock', 'blue', 'beep', 'bloop', 'berlin', 'bull', 'bop', 'bleach',
'breach', 'beach', 'boo', 'boom', 'blast', 'ben', 'bug', 'brazen', 'brute', 'brutal', 'blaze', 'brave', 'bread', 'befriend'];

function sampleWord() {
    const randomNum = Math.floor(Math.random() * demoWords.length);
    return demoWords[randomNum];
}