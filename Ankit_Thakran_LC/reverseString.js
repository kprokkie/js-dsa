/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// LC344
var reverseString = function(s) {
    
    if(!s) {
        return s;
    }

    let len = s.length;
    for (let i = 0, j = len - 1; i <=j; i++, j--) {
        let temp = s[i];
        s[i]= s[j];
        s[j] = temp;
    }
};