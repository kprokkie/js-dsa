/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
// LC1209
var removeDuplicates = function (s, k) {
    if (!s || k < 2) {
        return s;
    }

    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (!stack.length) {
            stack.push([s[i], 1]);
        } else {
            let top = stack[stack.length - 1];
            if (top[0] === s[i]) {
                top[1] = top[1] + 1;

                if (top[1] === k) {
                    stack.pop();
                }
            } else {
                stack.push([s[i], 1]);
            }
        }
    }

   let result = "";
    while (stack.length) {
        let top = stack.pop();
        result = (top[0].repeat(top[1])) + result;
    }
    return result;
}; 

console.log(removeDuplicates("abcd", 2));
console.log(removeDuplicates("deeedbbcccbdaa", 3));