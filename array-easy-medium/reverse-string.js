/**
 * Input = [h,e,l,l,o]
 * Output = [o,l,l,e,h]
*/

let str = ["h","e","l","l","o"];
function reverseString(str) {
    const len = str.length;
    const halfLength = Math.floor(len/2);
    for(let i = 0; i<halfLength; i++) {
        const temp = str[i];
        str[i] = str[len-1-i];
        str[len-1-i] = temp;
    }
    console.log(str);
}
reverseString(str);