// Rotate the array to the RIGHT by k positions and return the result. k may be larger than the array length.

const rotate = (numbers, k) => {
    if(numbers.length === 0){
        return []
    }
    k = k % numbers.length;

    const rigthPart = numbers.slice(numbers.length - k)
    const leftPart = numbers.slice(0, numbers.length - k)

    return [...rigthPart, ...leftPart]
};


console.log(rotate([1, 2, 3, 4, 5], 2));
console.log(rotate([1, 2, 3, 4, 5], 7));