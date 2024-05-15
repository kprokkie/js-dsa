const containsCommonItem = (arr1, arr2) => {

    // check inputs 
    if (!arr1 || !arr2 || !arr1.length || !arr2.length) {
        return false;
    }

    // worst case - nested loop - TC: O(n^2)

    // 

    let dict = {};
    for (let j = 0; j < arr1.length; j++) {
        dict[arr1[j]] = arr1[j];
    }

    for (let i = 0; i < arr2.length; i++) {
        if (dict[arr2[i]]) {
            return true;
        }
    }
    return false;

}

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];

console.log(containsCommonItem(array1, array2));

const array3 = ['a', 'b', 'c', 'x'];
const array4 = ['z', 'y', 'x'];

console.log(containsCommonItem(array3, array4));