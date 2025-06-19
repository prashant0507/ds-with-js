// Write a function that returns the count of digit in a number

function countDigit(n) {
    let count = 0;
    if(n == 0) {
        return 1;
    }
    n = Math.abs(n);
    while(n > 0) {
        n = Math.floor(n/10);
        count++;
    }
    return(count);
}

const result = countDigit(0); // Ans will be 1
// const result = countDigit(-123); // Ans will be 3
//const result = countDigit(0123); // Ans will be 3
console.log(result);