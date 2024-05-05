const reverseString1 = (str) => {
    // quick JS way
    return str.split("").reverse().join("");
};

const reverseString4 = (str) => {
    // quick JS way
    return [...str].reverse().join("");
};

const reverseString2 = (str) => {
    // check input
    if (!str || str.length < 2 || typeof str !== "string") {
        return;
    }

    const length = str.length;
    const tempArr = []; // SC: O(n)

    for (let i = length - 1; i >= 0; i--) {
        // TC: O(n)
        tempArr.push(str[i]);
    }

    return tempArr.join("");
    t;
};

const reverseString3 = (str) => {
    // check input
    if (!str || str.length < 2 || typeof str !== "string") {
        return;
    }

    // #2
    const strArr = str.split(""); // SC: O(n)
    const length = strArr.length;
    // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
    for (let i = 0; i < length / 2; i++) {
        // TC: O(n/2) ~ O(n)
        let temp = strArr[i];
        strArr[i] = strArr[length - 1 - i];
        strArr[length - 1 - i] = temp;
    }
    return strArr.join("");
};

const str1 = "abcdefg";
const rStr1 = reverseString1(str1);
console.log(rStr1);

const rStr2 = reverseString2(str1);
console.log(rStr2);

const rStr3 = reverseString3(str1);
console.log(rStr3);
