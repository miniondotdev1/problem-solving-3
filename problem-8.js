// Return the century a year belongs to. The first century spans years 1 to 100, the second 101 to 200, and so on.


const centuryFromYear = (year) => {
    const centuryYear = Math.ceil(year / 100);
    return centuryYear
    
};

console.log(centuryFromYear(1705));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1901));
console.log(centuryFromYear(101));