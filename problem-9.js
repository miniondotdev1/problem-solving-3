// Add the digits of a number. If the result has more than one digit, add its digits too. Keep going until a single digit is left, and return it.

const digitalRoot = (number) => {
    while(number > 10){
        const numsSplit = String(number).split("")
        const nums = numsSplit.map((num) => Number(num))
        const sum = nums.reduce((acc, num) => acc + num, 0)
        number = sum
    }
    return number
}

console.log(digitalRoot(942));
console.log(digitalRoot(132189));
console.log(digitalRoot(0));
console.log(digitalRoot(493193));
