// Given a signed 32 bit integer x, return x with its digits reversed. if reversing x causes the value to go outside the signed 32-bit integer range[-2 pow 31, 2 pow 31 - 1], then return 0 

function reverseInteger(num) {
    const copyNum = num;
    let rev = 0;
    num = Math.abs(num);
    while(num > 0) {
        let rem = num % 10;
        rev = (10*rev) + rem;
        num = Math.floor(num / 10);
    }

    let limit = Math.pow(2, 31);
    if(rev < -limit || rev > limit) {return 0};

    return copyNum < 0 ? -rev : rev;
}
// const result = reverseInteger(-123);
// const result = reverseInteger(1230);
// const result = reverseInteger(9999999999999999999999999999999999999999999);
const result = reverseInteger(123);
console.log("result", result);