/**
 * Problem Statement:
 * Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Examples:

Example 1:
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Example 2:
Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

Example 3:
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
*/

const arr = [4,0,2,1,5];

function missingNumber(arr){
    let ln = arr.length;
    let sumOfArr = 0;
    /**
     * find the sum 1+2+3+....+n => n * (n+1)/2
     * n = 5
     * 1+2+3+4+5 = 15
     * 5 * (5 + 1) / 2 = 15
    */
    let totalSum = ln * (ln + 1) / 2; 
    
    for(let i = 0; i < arr.length; i++) {
        sumOfArr = sumOfArr + arr[i];
    }

    return totalSum - sumOfArr;


}
console.log(missingNumber(arr));