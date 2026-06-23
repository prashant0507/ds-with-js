function printBinary(num) {
    let flip = 1;
    for (let i = 0; i < num; i++) {
        let row = "";
        
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

// OUTPUT

// 1
// 01
// 010
// 1010
// 10101
// 010101