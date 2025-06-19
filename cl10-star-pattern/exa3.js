function printStar(rows, columns) {
    for(let i = 0; i < rows; i++) {
        let row = ""
        for(let j = 0; j < columns; j++) {
            row = row + " *"
        }
        console.log(row);
    }
}
const result = printStar(4, 6);

// OUTPUT 

// I responsible for row
// J responsible for column

// ******
// ******
// ******
// ******