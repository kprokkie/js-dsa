const bubbleSort = (arr) => { // O(n^2)

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - i; j++) { // - i will reduce down the comparision that are not required

            if (arr[j] > arr[j + 1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

        }
    }

    return arr;

}

const numbers1 = [6, 5, 3, 1, 8, 7, 2, 4];
const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

console.log(bubbleSort(numbers1));
console.log(bubbleSort(numbers2));