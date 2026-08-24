//  Return the sum of all numbers in the array. An empty array sums to 0.


const sumArray = (numbers) => {
    let total = 0;
    for(let number of numbers){
        total += number
    }
    return total;
}

console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([]));
console.log(sumArray([-5, 5]));
console.log(sumArray([7]));
console.log(sumArray([-1, -2, -3]));



