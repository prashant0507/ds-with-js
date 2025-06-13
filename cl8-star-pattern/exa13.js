function printBinary(num) {
    for (let i = 0; i < num; i++) {
        let row = "";
        let flip = 1;
        for (let j = 0; j<=i; j++) {
            row = row + flip;
            if (flip === 1) {
                flip = 0;
            } else {
                flip = 1;
            } 
        }
        console.log(row);
    }
}

const result = printBinary(6);

// RESULT

// 1
// 10
// 101
// 1010
// 10101
// 101010