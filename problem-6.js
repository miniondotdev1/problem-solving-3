// Return true if the given year is a leap year. A year is a leap year if it is divisible by 4, except years divisible by 100, unless they are also divisible by 400.

const isLeapYear = (year) => {
    const leapYear = year % 400 === 0 || 
        (year % 4 ===0 && year % 100 !== 0)
        return leapYear
}

console.log(isLeapYear(2024));
console.log(isLeapYear(2025));
console.log(isLeapYear(2000));
console.log(isLeapYear(1600));

