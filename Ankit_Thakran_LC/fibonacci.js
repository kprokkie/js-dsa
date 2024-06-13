/**
 * @param {number} n
 * @return {number}
 */
// LC509
var fib = function (n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2)
};

console.log(fib(6));