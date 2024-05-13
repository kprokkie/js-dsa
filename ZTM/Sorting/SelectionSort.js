const selectionSort = (arr) => { // O(n^2)

    for (let i = 0; i < arr.length; i++) {

        // current index as minimum
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                // update the minimum index in case of smallest
                minIndex = j;
            }
        }

        // swap
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;

    }

    return arr;

}

const numbers1 = [6, 5, 3, 1, 8, 7, 2, 4];
const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

console.log(selectionSort(numbers1));
console.log(selectionSort(numbers2));