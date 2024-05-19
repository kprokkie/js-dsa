// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort
const arr = [100, -40, 500, -124, 0, 21, 7];

function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }

    }

    return arr;
}

console.log(bubbleSort(arr));

function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {

        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }

        // swap only
        if (minIndex !== i) {
            let temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }

    }

    return arr;

}

console.log(selectionSort(arr));

function mergeSort(arr) {

    // base case
    if (arr.length === 1) {
        return arr;
    }

    let middle = Math.floor(arr.length / 2);

    const left = arr.slice(0, middle);
    const right = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));

}

// merge two sorted arrays
function merge(left, right) {
    if (!left) {
        return right;
    }

    if (!right) {
        return left;
    }

    let lIndex = 0;
    let rIndex = 0;
    let result = [];

    while (lIndex < left.length && rIndex < right.length) {
        if (left[lIndex] < right[rIndex]) {
            result.push(left[lIndex]);
            lIndex++;
        } else {
            result.push(right[rIndex]);
            rIndex++;
        }
    }

    while (lIndex < left.length) {
        result.push(left[lIndex]);
        lIndex++;
    }

    while (rIndex < right.length) {
        result.push(right[rIndex]);
        rIndex++;
    }

    return result;

}

console.log(mergeSort(arr));

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
