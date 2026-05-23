// Find last digit from number = n % 10
// Remove last digit from number = n/10
// Concat digit (type number) = (10*rev)+reminder

const numInput = 121;
function palindrom(num) {
    let revNumber = 0;
    if(num < 0) {
        return false;
    }
    while(num > 0) {
        let reminder = num % 10;
        revNumber = (10*revNumber)+reminder;
        num = Math.floor(num/10);
    };
    return numInput == revNumber
}
const result = palindrom(numInput);
console.log(result);