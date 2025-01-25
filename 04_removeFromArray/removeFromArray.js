// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }


// const removeFromArray = function() {
// };

function removeFromArray(rawArray, ...remove) {
    return rawArray.filter(function(x) {
        return !remove.includes(x);
    });
}

console.log(removeFromArray([1,2,3,4], 1, 3))

// Do not edit below this line
module.exports = removeFromArray;
