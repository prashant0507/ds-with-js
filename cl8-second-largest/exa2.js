// FIND THE SECOND LARGEST NUMBER
let arr = [20,10,20];  
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
        } else if(arr[i] > secondLargestNum && arr[i] !== firstLargestNum) {
            secondLargestNum = arr[i];
        }

    }

    return secondLargestNum;
}

const result = findTheSecondLargestNum(arr);
console.log(result);