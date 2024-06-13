/**
 * @param {string[]} strs
 * @return {string}
 */
// LC14
var longestCommonPrefix = function (strs) {
    if (!strs || !strs.length) {
        return "";
    }

    let prefix = "";
    for (let j = 0; j < strs[0].length; j++) {

        let char = "";
        for (let i = 0; i < strs.length; i++) {
            if (!char) {
                char = strs[i][j];
            } else {
                if (strs[i][j] !== char) {
                    return prefix;
                }
            }
        }
        prefix += char;
    }
    return prefix;

};

const str1 = ["flower","flow","flight"];
const str2 = ["dog","racecar","car"];

console.log(longestCommonPrefix(str1));
console.log(longestCommonPrefix(str2));