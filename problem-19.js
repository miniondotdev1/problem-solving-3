// The array holds n distinct integers taken from the range 1 to n+1, with exactly one number missing. Return the missing number.

const findMissing = (numbers) => {

    const number = numbers.length +1

    const expectedSum = number * (number +1)/ 2

    let actualSum = 0
    for(let i = 0; i < numbers.length; i++){
        actualSum += numbers[i]
    }
    return expectedSum - actualSum;
}

console.log(findMissing([1, 2, 4, 5]));
console.log(findMissing([2, 3, 4]));
console.log(findMissing([1, 2, 3]));