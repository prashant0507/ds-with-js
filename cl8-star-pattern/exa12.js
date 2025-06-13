function printStar(num) {
    for (let i=0; i<num; i++) {
        let row = "";
        for (let j = 0; j<num-(i+1); j++) {
            row = row + " ";
        }
        for (let K = 0; K<i+1; K++) {
            row = row + "*";
        }
        console.log(row);
    }
}

const result = printStar(5);

// output

//     *
//    **
//   ***
//  ****
// *****