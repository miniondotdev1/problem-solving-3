
// problem - 1

const evenOrOdd = (number) => {
    
    if(number % 2 === 0){
        return "Even"
    }
    return "Odd"


}

// console.log(evenOrOdd([2]));
// console.log(evenOrOdd([7]));

// problem-2

const squareDigits = (number) => {
    const square = number * number
    return square
}

// console.log(squareDigits(9));

// problem-3

const getAverage = (numbers) => {

    let total = 0;
    for(let number of numbers){
        if(number < 0) {
            return "Invalid"
        }
        total += number
    }
    const avg = total / numbers.length;
    return avg.toFixed();
}

// console.log(getAverage([1, 2, 3, -4, 5]));
// console.log(getAverage([1, 1, 1, 1, -1, 1, 1, 2]));
// console.log(getAverage([1, 2, 3, 4, 5]));


const countSheep = (number) => {
    if (number <= 0) {
      return "";
    }

    let result = "";
    for(let i =1; i <= number; i++){
        result += `${i} Sheep...`
    }
    return result;
}

// console.log(countSheep(3));
// console.log(countSheep(-2));
// console.log(countSheep(0));


// problem - 5

const reverseNumber = (number) => {
    const reversed = Number(number.toString().split('').reverse().join(''))
    return reversed
}

console.log(reverseNumber(1234));
