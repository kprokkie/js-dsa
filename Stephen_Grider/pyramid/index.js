// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramidR(n) {
    // TODO
}

function pyramid(n) {

    let row = n;
    let columns = n + n - 1;
    let mid = Math.floor(columns / 2);

    for (let i = 0; i < row; i++) {
        let str = "";
        for (let j = 0; j < columns; j++) {
            if (j === mid || (j >= mid - i) && (j <= mid + i)) {
                str += "#";
            } else {
                str += " ";
            }
        }
        console.log(str);
    }
}

pyramid(1);
pyramid(2);
pyramid(3);
pyramid(4);
pyramid(5);

module.exports = pyramid;
