function printNumber(num) {
    for (let i = 0; i<num; i++) {
        let row = "";
        for(let j = 0; j<num-i; j++) {
            row = row + (j+1)
        }
        console.log(row);
    }
};
const result = printNumber(5);

// OUTPUT

// 12345
// 1234
// 123
// 12
// 1
