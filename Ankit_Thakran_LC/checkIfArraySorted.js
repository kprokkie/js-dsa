const checkIfArraySorted = function (arr, len) {



    if (len < 2) {
        return true;
    }

    if (arr[len - 2] > arr[len - 1]) {
        return false
    }

    // arr.pop();
    return checkIfArraySorted(arr, len - 1)
}

let arr = [1, 2, 3, 4, 5, 6]
console.log(checkIfArraySorted(arr, arr.length));