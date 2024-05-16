// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    if (!n) {
        return 0;
    }

    let num = n;

    if (num < 0) {
        num *= Math.sign(n);
    }

    let remainder = 0
    while (true) {
        remainder = remainder + num % 10;
        num = Math.floor(num / 10);

        if (num > 0) {
            remainder = remainder * 10;
        } else {
            return remainder * Math.sign(n);
        }
    }
}

console.log(reverseInt(15))
console.log(reverseInt(981))
console.log(reverseInt(500))
console.log(reverseInt(-15))
console.log(reverseInt(-90))

module.exports = reverseInt;
