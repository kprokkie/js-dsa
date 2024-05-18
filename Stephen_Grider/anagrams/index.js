// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    let str1 = stringA.replace(/[^\w]/g, "").toLowerCase();
    let str2 = stringB.replace(/[^\w]/g, "").toLowerCase();

    let dict = {};
    for (let char of str1) {
        if (char) {
            dict[char] = dict[char] + 1 || 1;
        }
    }

    for (let char of str2) {
        if (dict[char]) {
            dict[char] = dict[char] - 1;

            if (!dict[char]) {
                delete dict[char]
            }
        } else {
            return false;
        }
    }

    if (Object.entries(dict).length) {
        return false;
    }
    return true;
}

console.log(anagrams('rail safety', 'fairy tales'));
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
console.log(anagrams('Hi there', 'Bye there'));

module.exports = anagrams;
