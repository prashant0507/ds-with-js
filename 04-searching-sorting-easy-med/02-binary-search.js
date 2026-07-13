// Binary search can apply only on sorted array
const arr = [-20, -8, -1, 0, 5, 8, 9, 12, 15];

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (right >= left) {
        let middle = Math.floor((left + right) / 2);
        if (arr[middle] == target) {
            return middle;
        } else if(target > arr[middle]) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}

// const result = binarySearch(arr, -8);
// const result = binarySearch(arr, -81);
const result = binarySearch(arr, 9);
console.log(result);