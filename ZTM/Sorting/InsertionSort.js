const insertionSort = (arr) => { // O(n^2)

    for (let i = 1; i < arr.length; i++) {

        let minimum = arr[i];
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > minimum) {
                // swap
                arr[j + 1] = arr[j];
                arr[j] = minimum;
                // continue;
            }
            // break;
        }

    }

    return arr;

}

const numbers1 = [6, 5, 3, 1, 8, 7, 2, 4];
const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

console.log(insertionSort(numbers1));
console.log(insertionSort(numbers2));