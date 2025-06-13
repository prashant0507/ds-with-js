// Find the largest number in an array

let arr = [5,0,7,10,8,17,1];

function findLargestNumber(arr){
    // we can set null or -1
    let largestNum = -1; // This solution will not work if array contain negative number


    //This will work perfectly
    //let largestNum = -Infinity;
    //let largestNum = arr[0];


    // compare largestNum with each element and assign the larget value to largestNum
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > largestNum) {
            largestNum = arr[i];
        }
    }

    return largestNum;
}
const result = findLargestNumber(arr);
console.log(result);