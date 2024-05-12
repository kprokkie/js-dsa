// iterative
const iFactorial = (num) => {

    if (num === 0 || num === 1) {
        return 1;
    }

    let fact = 1;
    // for (let i = num; i > 0; i--) {
    for (let i = num; i > 1; i--) { // O(n)
        fact *= i;
    }
    return fact;
}

console.log(iFactorial(5));

// recursive

const rFactorial = (num) => {
    // if (num === 1) {
    //     return 1;
    // }

    if (num === 0 || num === 1) {
        return 1;
    }

    if (num === 2) {
        return 2;
    }

    // 5! = 5 * 4!
    return num * rFactorial(num - 1); // O(n)
}

console.log(rFactorial(5));
console.log(rFactorial(2));
console.log(rFactorial(1));
console.log(rFactorial(0));

// :return 120
// 5! = 5 * 4! :return 120
// 4! = 4 * 3! :return 24
// 3! = 3 * 2! :return 6
// 2! = 2 * 1! :return 2
// 1! = :return 1