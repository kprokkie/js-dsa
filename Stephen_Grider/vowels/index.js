// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    if (!str) {
        return 0;
    }

    let repStr = str.replace(/[^\w]/g, "").toLowerCase();

    // str.match(/[aeiou]/gi)
    // g stands for dont stop
    // i stands for case insestive

    // vowels = ["a", "e"] & then use vowels.includes(char)

    let vowels = { a: 1, e: 1, i: 1, o: 1, u: 1 };
    let count = 0;

    for (let char of repStr) {
        if (vowels[char]) {
            count++;
        }
    }

    return count;
}

console.log(vowels('Hi There!'))
console.log(vowels('Why do you ask?'))
console.log(vowels('Why?'))

module.exports = vowels;
