const convertToCelsius = function (F) {
    return Number(((5 / 9) * (F - 32)).toFixed(1));
};

const convertToFahrenheit = function (C) {
    return Number((C * (9 / 5) + 32).toFixed(1));
};

console.log(convertToCelsius(41));
console.log(convertToFahrenheit(41));

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit,
};
