// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // check input 
    if (!str) {
        return str;
    }

    // 4
    return str.split("").reduce((p, c) => c + p, "");

    // 3 A
    let revStr = "";
    for (let char of str) {
        revStr = char + revStr;
    }
    return revStr;

    // 2 A
    return str.split("").reverse().join("");

    // 1 R
    return [...str].reverse();
}

module.exports = reverse;
