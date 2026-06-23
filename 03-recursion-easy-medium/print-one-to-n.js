/**
 * 1,2,3,4.......n
*/
const n = 10;
function print(x) {
    if(x > n) {
        return;
    }
    console.log(x);
    x = x + 1;
    print(x);
}
console.log(print(1));