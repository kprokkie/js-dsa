// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

    if (!array) {
        return array;
    }

    if (size < 1) {
        return array;
    }

    let i = 0

    let chunkedArr = [];
    while (i < array.length) {
        chunkedArr.push(array.slice(i, i + size));
        i += size;
    }

    return chunkedArr;

    // 1 A
    let chunked = [];
    let chunks = [];
    for (let i = 0; i < array.length; i++) {
        if (chunks.length === size) {
            chunked.push(chunks);
            chunks = [];
        }
        chunks.push(array[i]);
    }

    if (chunks.length) {
        chunked.push(chunks);
    }

    return chunked;
}

console.log(chunk([1, 2, 3, 4], 2));
console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));


module.exports = chunk;
