const palindromes = function (string) {
    const regex = /[^a-z0-9]/g;
    const lowerCaseString = string.toLowerCase().replace(regex, "");
    const reversedString = lowerCaseString.split("").reverse().join("");
    return lowerCaseString === reversedString;
}

// Do not edit below this line
module.exports = palindromes;
