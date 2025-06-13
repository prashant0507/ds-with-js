// write a function that searches for an element in an array and return the index. if the element is not present then just return -1

let arr = [4,2,0,10,8,3,0];
let findElement = 10;
//let findElement = 100;

function searchElement(arr, findElement) {
    for(let i = 0; i<arr.length; i++) {
        if(arr[i] == findElement) {
            return i;
        }
    }
    return -1;
};

const output = searchElement(arr, findElement);
console.log(output);