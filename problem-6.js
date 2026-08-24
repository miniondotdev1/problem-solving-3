// Return true if the given year is a leap year. A year is a leap year if it is divisible by 4, except years divisible by 100, unless they are also divisible by 400.

const isLeapYear = (year) => {
    const loopYear = year % 4 === 0;
    return loopYear;
}

console.log(isLeapYear(2024));
console.log(isLeapYear(2025));
console.log(isLeapYear(2000));

