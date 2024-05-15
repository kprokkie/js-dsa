let cache = {};
const rFibonacci = (idx) => {
    console.log("checking", idx)
    if (cache[idx]) {
        cache[idx] += 1;
    } else {
        cache[idx] = 1;
    }

    if (idx < 2) return idx;
    return rFibonacci(idx - 1) + rFibonacci(idx - 2); // mathematics tn = tn-1 + tn-2
    // exponential size O(2^n) - worst

    // dynamic programming or memoization 
}

console.log(rFibonacci(8));
console.log(cache);

/* 
 each idx is looked up that much time
 {
  '0': 13,
  '1': 21,
  '2': 13,
  '3': 8,
  '4': 5,
  '5': 3,
  '6': 2,
  '7': 1,
  '8': 1
}
 */

