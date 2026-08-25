// Return an array where each position holds the sum of all elements up to and including that position.

const runningSum = (numbers) => {
    let result = []
    let sum = 0
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i]
        result.push(sum)
    }
    return result;
}

console.log(runningSum([1, 2, 3, 4]));
