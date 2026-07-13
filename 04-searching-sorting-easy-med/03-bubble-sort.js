let arr = [4, 5, 1, 3, 9];
function bubbleSort(arr) {
    let n = arr.length - 1;
    for(let i = 0; i < n; i++) {
        let isArraySwap = false;
        for(let j = 0; j < n-1-i; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isArraySwap = true;
            }
        }
        if(!isArraySwap) break;
    }
    return arr;
}
const result = bubbleSort(arr);
console.log('RESULT', result);