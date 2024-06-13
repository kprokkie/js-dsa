/**
 * @param {string} s
 * @return {number}
 */
// LC58
var lengthOfLastWord = function(s) {
    
    // check
    if(!s) {
        return 0;
    }

    let wordLen = 0;
    let lastWordLen = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== " ") {
            wordLen++;
        } else {
            if(wordLen) {
                lastWordLen = wordLen;
            }
            wordLen = 0;
        }
    }

    return wordLen || lastWordLen;
};