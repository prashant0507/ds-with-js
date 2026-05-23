/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.

Examples:
Example 1:
Input: nums = [2, 2, 1]
Output: 1

Example 2:
Input: nums = [4, 1, 2, 1, 2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1
*/

const arr = [4, 1, 2, 1, 2];

function findSingle(arr) {
    let xor = 0;
    for(let i = 0; i < arr.length; i++) {
        xor = xor ^ arr[i];
    }
    return xor;
}
console.log(findSingle(arr));