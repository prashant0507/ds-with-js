/**
 * n.....to.....1
*/
const num = 10;
function print(num) {
    if(num < 1) { // num == 0
        return;
    }
    console.log(num);
    num = num - 1;
    print(num);
}
console.log(print(num));