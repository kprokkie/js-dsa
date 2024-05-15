// old way
const rFibonacci = (idx) => {
    if (idx < 2) return idx;
    return rFibonacci(idx - 1) + rFibonacci(idx - 2); // mathematics tn = tn-1 + tn-2
    // exponential size O(2^n) - worst

    // dynamic programming or memoization - see below
}

console.log(rFibonacci(8));

// memoized
const rFibonacciMemo = () => { // TC: O(n) SC: O(n)
    let cache = {};

    return function recFibonacci(idx) {
        if (cache[idx]) { // idx in cache
            console.log("from cache", idx)
            return cache[idx];
        } else {
            console.log("eval", idx)

            if (idx < 2) {
                cache[idx] = idx;
                return idx;
            }

            cache[idx] = recFibonacci(idx - 1) + recFibonacci(idx - 2); // mathematics tn = tn-1 + tn-2
            return cache[idx];
        }
    }
}

const rFibonacciM = rFibonacciMemo();
console.log(rFibonacciM(8));

/* 
 each idx is evaluate once 
 {
eval 8
eval 7
eval 6
eval 5
eval 4
eval 3
eval 2
eval 1
eval 0
from cache 1
from cache 2
from cache 3
from cache 4
from cache 5
from cache 6
}
 */

// memoized 2
const rFibonacciMemo2 = (idx) => { // TC: O(n) SC: O(n)
    let cache = {};

    const recFibonacci = (idx) => {
        if (cache[idx]) { // idx in cache
            console.log("from cache", idx)
            return cache[idx];
        } else {
            console.log("eval", idx)

            if (idx < 2) {
                cache[idx] = idx;
                return idx;
            }

            cache[idx] = recFibonacci(idx - 1) + recFibonacci(idx - 2); // mathematics tn = tn-1 + tn-2
            return cache[idx];
        }
    }

    return recFibonacci(idx);
}

console.log(rFibonacciMemo2(10));
