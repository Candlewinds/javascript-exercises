let x = 5;
let y = 37;

const sumAll = function (x, y) {
    if (x < 0 || y < 0) {
        return "ERROR";
    }
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
        return "ERROR";
    }

    [seqStart, seqEnd] = [Math.min(x, y), Math.max(x, y)];
    return (seqEnd * (seqEnd + 1)) / 2 - ((seqStart - 1) * seqStart) / 2;
};

console.log(sumAll(x, y));

// Do not edit below this line
module.exports = sumAll;
