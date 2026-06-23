/**
 * Input: nums = [3,2,2,3], val = 3 
 * Output: 2, nums = [2,2,_,_]
*/

const val = 3;
let x = 0;
let arr = [3,2,2,3];
function removeElement(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] != val) {
            arr[x] = arr[i];
            x = x + 1;
        }
    }
    return x;
}

console.log(removeElement(arr));

