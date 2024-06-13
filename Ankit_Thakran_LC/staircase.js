let counter = 0;
let cache = {};
const staircase = (n) => {
    counter++;
    if (n < 2) {
        return 1
    }

    if (n === 2) {
        return 2;
    }

    if(cache[n]) {
        return cache[n]
    } else {
        let result = staircase(n - 1) + staircase(n - 2) + staircase(n - 3);
        cache[n] = result;
        return result;
    }
}

console.log(staircase(15));
console.log(counter);