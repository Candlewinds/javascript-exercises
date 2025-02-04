string = "Racecar";

const palindromes = function (string) {
    const cleanedString = string
        .toLowerCase()
        .split("")
        .filter((char) => {
            // Keep only alphanumeric characters
            const code = char.charCodeAt(0);
            return (
                (code >= 48 && code <= 57) || // Numbers (0-9)
                (code >= 65 && code <= 90) || // Uppercase letters (A-Z)
                (code >= 97 && code <= 122) // Lowercase letters (a-z)
            );
        })
        .join("");
    console.log(cleanedString);
    const reverseString = [...cleanedString].reverse().join("");
    console.log(reverseString);
    if (cleanedString === reverseString) {
        return true;
    } else return false;
};

// Do not edit below this line
module.exports = palindromes;
