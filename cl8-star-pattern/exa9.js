function printNumber(num) {
    for (let i = 1; i<= num; i++) {
        let row = "";
        for (let j = 1; j<=i; j++) {
            row = row + i;
        }
        console.log(row);
    }
}

const result = printNumber(5);

// OUTPUT 

// 1
// 22
// 333
// 4444
// 55555
