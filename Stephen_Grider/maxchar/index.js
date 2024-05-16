// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    if (!str) {
        return "";
    }

    let dict = {};
    let max = 0;
    let maxC = "";

    for (let char of str) {
        // if (!dict[char]) {
        //     dict[char] = 1;
        // } else {
        //     dict[char] = dict[char] + 1;

        //     if (dict[char] > max) {
        //         max = dict[char];
        //         maxC = char;
        //     }
        // }

        // short 
        dict[char] = dict[char] + 1 || 1;

        if (dict[char] > max) { // it skips of another O(n) object check
            max = dict[char];
            maxC = char;
        }

    }

    // for(let char in dict) { // not required
    //     if (dict[char] > max) {
    //         max = dict[char];
    //         maxC = char;
    //     }
    // }

    if (maxC === "") {
        return str
    }
    return maxC;
}

console.log(maxChar("abcccccccd"));
console.log(maxChar("apple 1231111"));


module.exports = maxChar;
