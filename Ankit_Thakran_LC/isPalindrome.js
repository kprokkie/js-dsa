/**
 * @param {string} s
 * @return {boolean}
 */
// LC125
var isPalindrome = function(s) {
    if (!s) {
        return false;
    }

    let nas = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    for (let i = 0, j = nas.length - 1; i <= j ; i++, j--) {
        if (nas[i] !== nas[j]) {
            return false
        }
    }
    return true;
};