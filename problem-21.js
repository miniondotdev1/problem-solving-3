// Uppercase the first letter of every word in the sentence, leaving the rest of each word untouched. Words are separated by single spaces.

const capitalizeWords = (str) => {
    const result = str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
    return result;
}

console.log(capitalizeWords("hello world"));
console.log(capitalizeWords("ALREADY BIG"));