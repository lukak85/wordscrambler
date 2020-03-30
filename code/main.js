function convert(original) {
    let tableOfWords = original.split(" ");
    for(let i = 0; i < tableOfWords.length; i++) {
        let chars = tableOfWords[i].split('');
        for(let j = 1; chars.length > 3 && j < chars.length - 1; j++) {
            // In case the randomizer decides, switch the numbers
            if(Math.round(Math.random())) {
                let randNum = Math.floor(Math.random() * (chars.length - 2)) + 1;
                let currChar = chars[j];
                chars[j] = chars[randNum];
                chars[randNum] = currChar;
            }
        }
        tableOfWords[i] = chars;
        tableOfWords[i] = tableOfWords[i].join("");
    }
    document.getElementById('output-sentence').value = tableOfWords.join(" ");
}