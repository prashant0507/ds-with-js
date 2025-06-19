function printStar() {
    for(let i = 0; i < 4; i++) {
        let row = ""
        for(let j = 0; j < i + 1; j++) {
            row = row + " *";
        }
        console.log(row);
    }
}
const result = printStar();

// OUTPUT

// I responsible for row
// J responsible for column

// *
// * *
// * * *
// * * * *