// FIND THE SECOND LARGEST NUMBER

let arr = [4,9, 0,2,8,7,1];
//let arr = [4];

// NOTE
// THIS CODE WILL FAIL FOR THIS ARRAY. IT WILL RETURN 20 
// IT SHOULD BE 10
// let arr = [20,10,20];  

function findTheSecondLargestNum(arr) {
    let firstLargestNum = -Infinity;
    let secondLargestNum = -Infinity;

    if(arr.length < 2) {
        return "ARRAY SHOULD HAVE ATLEAST 2 ELEMENT";
    }

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > firstLargestNum) {
            secondLargestNum = firstLargestNum;
            firstLargestNum = arr[i];
        } else if(arr[i] > secondLargestNum) {
            secondLargestNum = arr[i];
        }

    }

    return secondLargestNum;
}

const result = findTheSecondLargestNum(arr);
console.log(result);