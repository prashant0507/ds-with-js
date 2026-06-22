// [5,4,3,2,1] == 15
arr = [5,4,3,2,1];
function sum(n) {
    if(n === 0) {
        return arr[0];
    }

    return arr[n] + sum(n - 1);
}
const result = sum(arr.length - 1);
console.log("SUM OF ALL ELEMENT IN ARRAY =>>>> ", result);