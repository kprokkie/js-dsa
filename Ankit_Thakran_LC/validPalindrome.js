/**
 * @param {string} s
 * @return {boolean}
 */
// LC680
var validPalindrome = function (s) {

    if (!s) {
        return false;
    }

    var checkPalindrome = function (s, start, end) {
        for (let i = start, j = end; i <= j; i++, j--) {
            if (s[i] !== s[j]) {
                return false
            }
        }
        return true;
    }

    for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
        if (s[i] !== s[j]) {
            return checkPalindrome(s, i + 1, j) || checkPalindrome(s, i, j - 1);
        }
    }
    return true;
};

console.log(validPalindrome("eeccccbebaeeabebccceea"))