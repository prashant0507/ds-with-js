// write a  function that returns the number of negative numbers in an array  

//let arr = [2,3]
let arr = [2,-9,17,0,1,-10,-4,-8];
function countNegative(arr){
    let count = 0;
    for (let i = 0; i<arr.length; i++) {
        if(arr[i] < 0) {
            count++;
        }
    }
    return count;
}

const result = countNegative(arr);
console.log(result);