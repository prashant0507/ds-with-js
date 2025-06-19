function printNumber(num) {
    for (let i = 0; i<num; i++) {
        let row = "";
        for(let j = 0; j<num-i; j++) {
            row = row + "*"
        }
        console.log(row);
    }
};
const result = printNumber(5);

// OUTPUT

// *****
// ****
// ***
// **
// *