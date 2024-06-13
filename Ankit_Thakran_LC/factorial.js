/**
 * @param {number} n
 * @return {number}
 */
var factorial = function (n) {
    if (n < 2) return 1;
    return n * factorial(n - 1);
};

console.log(factorial(5));
console.log(factorial(10));
