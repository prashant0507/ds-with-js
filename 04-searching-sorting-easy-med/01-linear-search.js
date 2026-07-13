// Time Complexity o(n)

const arr = [4,9,1,0,2,-10];

function linerSearch(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i;
        }
    }
    return -1;
}

const result = linerSearch(arr, 11);
console.log(result);