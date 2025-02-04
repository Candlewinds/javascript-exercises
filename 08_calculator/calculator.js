const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (array) {
    return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {
    return array.reduce(
        (accumulator, currentValue) => accumulator * currentValue
    );
};

const power = function (a, b) {
    return a ** b;
};

const factorial = function (a) {
    if (a === 0 || a === 1) return 1;
    let i = a;
    let number = i;

    while (i > 1) {
        i--;
        number *= i;
        console.log(number);
    }
    return number;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
