function powerOfTwo(num) {
    if(num === 1) {
        return true;
    }

    // (num % 2 !== 0) odd number check
    else if(num < 1 || (num % 2 !== 0)) {
        return false;
    }

    return powerOfTwo(num / 2);

}

const result = powerOfTwo(16);
console.log(result);