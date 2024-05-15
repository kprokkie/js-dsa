// example 2 // -------------------------- //
const addNumber100 = (n) => {
    console.log("adding")
    return n + 100;
}

const addNumber100Memo = () => {
    let cache = {};

    // wrap
    return function (n) {
        if (n in cache) {
            console.log("in cache")
        } else {
            console.log("not in cache")
            cache[n] = n + 100;
        }
        return cache[n];
    }
}


console.log(addNumber100(10));
console.log(addNumber100(10));
console.log(addNumber100(10));
console.log(addNumber100(20));
console.log("----------------")

const addNumber100M = addNumber100Memo();
console.log(addNumber100M(10));
console.log(addNumber100M(10));
console.log(addNumber100M(10));
console.log(addNumber100M(20));
