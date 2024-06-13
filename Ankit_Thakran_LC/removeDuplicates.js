/**
 * @param {string} s
 * @return {string}
 */
// LC1047
var removeDuplicates = function (s) {

    if (!s) {
        return "";
    }

    // const stack = [];
    // for (let i = 0; i < s.length; i++) {
    //     if (!stack.length || stack[stack.length - 1] !== s[i]) {
    //         stack.push(s[i]);
    //     } else {
    //         stack.pop();
    //     }
    // }
    // return stack.join("");

    let pointer = -1;
    for (let i = 0; i < s.length; i++) {
        if (pointer === -1 || s[pointer] !== s[i]) {
            console.log("Pushing", s[i])
            pointer++;
            s[pointer] = s[i]; // pushing
            console.log(pointer, s);
        } else {
            console.log("Popping", s[i])
            pointer--;
        }
    }
    console.log(s);
    let result = "";
    for (let i = 0; i <= pointer; i++) {
        result += s[i];
    }
    return result;
};

console.log(removeDuplicates("abbaca"))