function printNum(num) {
    for(let i = 0; i < num; i++) {
        let row = ""
        for(let j = 0; j <= i; j++) {
            row = row + (j+1);
        }
        console.log(row);
    }
}
const result = printNum(5);

// OUTPUT

// 1
// 12
// 123
// 1234
// 12345