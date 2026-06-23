const arr = [5,4,3,2,1];
function sum(n) {
    const isOdd = arr[n] % 2 !== 0;
    if(n === 0) {
        if (isOdd) {
            return arr[0];
        } else {
            return 0;
        }
    }

    if (isOdd) {
        return arr[n] + sum(n-1);
    } else {
        return 0 + sum(n-1);
    }
}
const result = sum(arr.length-1);
console.log('SUM OF ODD NUMBER', result);