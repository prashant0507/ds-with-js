// 5! = 5*4*3*2*1 = 120
// n! = n*(n-1)*(n-2)*......1;
// factorial of 1 is always 1

function factorial(num) {
    if(num == 1) {
        return 1;
    }
    return num * factorial(num - 1);
}
const result = factorial(5);
console.log(result);