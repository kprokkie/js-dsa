// 0 1 1 2 3 5[5] 8 13 21[8] 34 55[10] 89 144

// return the number from index\

const iFibonacci = (idx) => {
    // if (idx === 0) return 0;
    // if (idx === 1) return 1;

    if (idx < 2) return idx;

    let a = 0;
    let b = 1;

    let sum = 0;

    for (let i = 2; i <= idx; i++) {
        sum = a + b;
        a = b;
        b = sum;
    }

    return sum;
}

console.log(iFibonacci(0));
console.log(iFibonacci(1));
console.log(iFibonacci(2));
console.log(iFibonacci(3));
console.log(iFibonacci(4));
console.log(iFibonacci(5));
console.log(iFibonacci(8));
console.log(iFibonacci(10));

// print 

const iPrintFibonacci = (idx) => {
    let a = 0;
    let b = 1;

    let sum = 0;

    for (let i = 0; i <= idx; i++) {

        if (i < 2) {
            console.log(i);
        } else {
            sum = a + b;
            a = b;
            b = sum;

            console.log(sum);
        }
    }
}

console.log("print---")
iPrintFibonacci(10);

const rFibonacci = (idx) => {
    if (idx < 2) return idx;
    return rFibonacci(idx - 1) + rFibonacci(idx - 2); // mathematics tn = tn-1 + tn-2
    // exponential size O(2^n) - worst

    // dynamic programming or memoization 
}

console.log(rFibonacci(8));

// array iterative
const arrFibonacci = (idx) => {
    if (idx < 2) return idx;

    const arr = [0, 1];

    for (let i = 2; i <= idx; i++) { // O(n)
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr[idx];
}

console.log(arrFibonacci(8));
console.log(arrFibonacci(10));


