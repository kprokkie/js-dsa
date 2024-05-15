// example 1 // -------------------------- //
const addNumber100 = (n) => {
    console.log("adding")
    return n + 100;
}

let cache = {}; // cache to live inside not polluting the global // use closures
const addNumber100Memo = (n) => {
    if (n in cache) {
        console.log("in cache")
    } else {
        console.log("not in cache")
        cache[n] = addNumber100(n);
    }
    return cache[n];
}


console.log(addNumber100(10));
console.log(addNumber100(10));
console.log(addNumber100(10));
console.log(addNumber100(20));
console.log("----------------")
console.log(addNumber100Memo(10));
console.log(addNumber100Memo(10));
console.log(addNumber100Memo(10));
console.log(addNumber100Memo(20));

// example 2 // ----------------------------------- //