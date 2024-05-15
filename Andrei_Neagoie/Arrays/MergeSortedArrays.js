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
const array1 = [0, 3, 4, 31];
const array2 = [4, 6, 19, 30];

const mergedArr = mergeSortedArrays(array1, array2);
console.log(mergedArr); // [0, 3, 4, 4, 6 , 30, 31]

// issue with equal length array is fixed above
const mergeSortedArraysDepreacted = (arr1, arr2) => {
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

    for (let i = 0, j = 0; i < length1 && j < length2; ) {
        if (arr1[i] <= arr2[j]) {
            tempArr.push(arr1[i]);
            i++;
        } else {
            tempArr.push(arr2[j]);
            j++;
        }
    }

    if (length1 > length2) {
        let i = length2;
        while (i < length1) {
            tempArr.push(arr1[i]);
            i++;
        }
    }

    if (length2 > length1) {
        let i = length1;
        while (i < length2) {
            tempArr.push(arr2[i]);
            i++;
        }
    }

    return tempArr;
};




