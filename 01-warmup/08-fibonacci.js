// [0,1,1,2,3,5,8]
// F(5) = 5 = [0,1,1,2,3]
// First 2 position always fixed 0 and 1
// 0,1,1,2,3,5,8,13,21......
const n = 5;
const arr = [0,1]
for (let i = 2; i < n; i++) {
    arr[i] = arr[i-1] + arr[i-2]; 
}
console.log(arr);