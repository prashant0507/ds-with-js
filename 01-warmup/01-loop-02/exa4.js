// Find the smallest number in an array

let arr = [5,0,7,-10,8,17,-1, -9];

function findSmallestNumber(arr){
    
    //let smallNum = arr[0];
    let smallNum = Infinity;


    // compare smallNum with each element and assign the smallest value to smallNum
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < smallNum) {
            smallNum = arr[i];
        }
    }

    return smallNum;
}
const result = findSmallestNumber(arr);
console.log(result);