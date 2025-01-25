// const ages = [3, 10, 18, 20];

// ages.some(checkAdult);
// function checkAdult(age) {
//   return age > 18;
// }

const removeFromArray = function (rawArray, remove) {
    let cleanedArray = [];
    for (const entry of rawArray) {
        if (entry.some(remove)) continue;
        else cleanedArray += entry;
    }
};

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
