// Return a two-element array [largest, smallest] from the given array of numbers.

const maxMin = (numbers) => {
    const maxNumber = Math.max(...numbers)
    const minNumber = Math.min(...numbers)

    const result = [maxNumber, minNumber]
    return result;
}


console.log(maxMin([1, 2, 3]));
console.log(maxMin([5]));
console.log(maxMin([-4,-1,-9]));