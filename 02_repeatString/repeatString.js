const repeatString = function (string, num) {
    let repeatingWord = "";
    if (num < 0) {
        return "ERROR";
    } else {
        for (let i = 0; i < num; i++) {
            repeatingWord += string;
        }
        return repeatingWord;
    }
};

console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;

// test("returns ERROR with negative numbers", () => {
//     expect(repeatString("goodbye", -1)).toEqual("ERROR");
