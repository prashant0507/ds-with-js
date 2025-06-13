function printStar() {
    for(let i = 0; i < 4; i++) {
        let row = ""
        for(let j = 0; j <= i; j++) {
            row = row + " *";
        }
        console.log(row);
    }
}
const result = printStar();

// (j < i+1) ==  (j <= i)

// OUTPUT

// I responsible for row
// J responsible for column

// *
// * *
// * * *
// * * * *