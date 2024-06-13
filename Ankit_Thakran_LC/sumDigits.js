/**
 * @param {number} n
 * @return {number}
 */
var sumDigits = function (n) {
    if (n === 0) {
        return n;
    }
   
    return sumDigits(Math.floor(n/10)) + (n % 10);

};

console.log(sumDigits(12345)); // 15
