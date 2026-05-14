/**
 * Array should be sorted
 * Input arr = [0,0,1,1,1,2,2,3,3,4]
 * Output Lenth = 5 // arr = [0,1,2,3,4,_,_,_,_,_]
 */

let arr = [0,1,1,1,2,2,3,3,4];
function removeDuplicates(arr) {
    let k = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[k]) {
            k = k + 1;
            arr[k] = arr[i];
        }
    }
    console.log('length', k+1);
}
removeDuplicates(arr);