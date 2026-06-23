// 5,4,3,2,1 = 15
let num = 5;
function sum(num) {
    if(num === 0) {
        return 0;
    }

    return num + sum(num-1);
}

const result = sum(num);
console.log("SUM OF N NUMBER=>>>>", result);