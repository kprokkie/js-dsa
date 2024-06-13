const binarySearch = (arr, key) => {

    if (!arr) {
        return;
    }

    let len = arr.length;

    let s = 0;
    let e = len - 1;

    while (s < e) {
        let  mid = Math.floor((s + e) / 2);
        if (arr[mid] === key) {
            return mid;
        } else if (arr[mid] > key) {
            e = mid - 1;
        } else if (arr[mid] < key) {
            s = mid + 1;
        }
    }
    return -1;

}

const arr = [2, 4, 5, 8, 20, 23, 40, 49];
console.log(binarySearch(arr, 4));
console.log(binarySearch(arr, 40));
console.log(binarySearch(arr, 44));