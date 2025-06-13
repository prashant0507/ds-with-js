function printStar(num) {
    for(let i = 0; i < num; i++) {
        let row = ""
        for(let j = 0; j < num; j++) {
            row = row + "*";
            console.log(row);
        }
        
    }
}
const result = printStar(4);

// OUTPUT

// I responsible for row
// J responsible for column

// *
// **
// ***
// ****

// *
// **
// ***
// ****

// *
// **
// ***
// ****

// *
// **
// ***
// ****