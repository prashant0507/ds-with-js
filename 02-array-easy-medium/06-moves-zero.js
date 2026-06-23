/**
 * Given an integer array nums, move all 0’s to the end of it while maintaining the relative order of the non-zero elements.
 * Note:You must do this in-place without making a copy of the array.

Examples
Example 1:
Input:nums = [0,1,0,3,12]
Output:[1,3,12,0,0]

Example 2:
Input:nums = [0]
Output:[0]
*/

/**
 * SOLUTION:-
 * Initialize a pointer x = 0.
 * Loop through the array:
 * If the current element is not 0, assign it to nums[x] and increment x.
 * After the loop, from index x to the end of the array, fill all values with 0.
*/

let arr = [0,1,0,3,12];
function MovesZero(arr) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0) {
            arr[x] = arr[i];
            x++;
        }
    }

    for(let i = x; i < arr.length; i++) {
        arr[i] = 0;
    }

    console.log(arr);
}

MovesZero(arr);