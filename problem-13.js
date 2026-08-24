// Return a two-element array: the COUNT of positive numbers, then the SUM of negative numbers. Zero counts as neither. If the input array is empty, return an empty array.

const countPositivesSumNegatives = (numbers) => {

    let count =0
    let total = 0;
    for(let number of numbers){
        if(number > 0){
            count++
        }

        if(number < 0){
            total += number
        }
    }
    const result = [count, total]
    return result;
}

console.log(countPositivesSumNegatives([1, 2, 3, -1, -2]));
console.log(countPositivesSumNegatives([-1, -2, -3]));
console.log(countPositivesSumNegatives([]));