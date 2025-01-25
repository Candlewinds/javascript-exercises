const reverseString = function (string) {
    const splitArray = string.split("");
    const reversedArray = splitArray.reverse();
    return reversedArray.join("");
};

console.log(reverseString("hello world"));

// Do not edit below this line
module.exports = reverseString;
