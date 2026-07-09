// F(5) = 5 
// First 2 position always fixed 0 and 1
// 0,1,1,2,3,5,8,13,21......

const n = 5;
function feb(n) {
    if(n <= 1) {
        return n;
    }
    // Suppose we have to find feb of 5 then we need to add 4 = (n-1) and 3 = (n-2)
    return feb(n-1) + feb(n-2)
}
const result = feb(n);
console.log(result);