const mergeSortedArrays = (arr1, arr2) => {

    // check inputs
    if (!arr1 || !arr2) {
        return;
    }

    if (arr1 && !arr1.length) {
        return arr2;
    }

    if (arr2 && !arr2.length) {
        return arr1;
    }

    const tempArr = [];

    const length1 = arr1.length;
    const length2 = arr2.length;

    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < length1 && rightIndex < length2) {
        if (arr1[leftIndex] <= arr2[rightIndex]) {
            tempArr.push(arr1[leftIndex]);
            leftIndex++;
        } else {
            tempArr.push(arr2[rightIndex]);
            rightIndex++;
        }
    }

    while (leftIndex < length1) {
        tempArr.push(arr1[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < length2) {
        tempArr.push(arr2[rightIndex]);
        rightIndex++;
    }

    return tempArr;
}

const mergeSort = (arr) => {

    if (arr.length === 1) {
        return arr;
    }

    const length = arr.length;
    const middle = Math.floor(length / 2);

    const leftArr = arr.slice(0, middle);
    const rightArr = arr.slice(middle);

    return mergeSortedArrays(mergeSort(leftArr), mergeSort(rightArr));
}



const numbers1 = [6, 5, 3, 1, 8, 7, 2, 4];
const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

console.log(mergeSort(numbers1));
console.log(mergeSort(numbers2));