// Move every 0 to the end of the array while keeping the relative order of all the non-zero values. Return the new array.

const moveZeros = (numbers) => {
    let result = []
    let countZero = 0

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] === 0){
            countZero++
        }
        else(
            result.push(numbers[i])
        )
    }

    for(let i = 0; i < countZero; i++){
        result.push(0)
    }
    return result;
}

console.log(moveZeros([0, 1, 0, 3, 12]));