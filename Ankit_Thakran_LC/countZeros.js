/**
 * @param {number} n
 * @return {number}
 */
var countZeros = function (n) {
    // console.log(n)
    if (n === 0) {
        return n;
    }

    let ans = (n > 0 && n % 10 ? 0 : 1);
    console.log(n, ans);
    return countZeros(Math.floor(n / 10)) + ans;
};

console.log(countZeros(10350)); // 2
