// Return a new array with duplicates removed, keeping the FIRST occurrence of each value and preserving the original order.

const removeDuplicates = (numbers) => {

    let result = []
    for(let i = 0; i < numbers.length; i ++){
        if(!result.includes(numbers[i])){
            result.push(numbers[i])
        }
    }
    return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 1]));