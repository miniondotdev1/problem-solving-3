// Return an array of length n. For each position i from 1 to n: put "FizzBuzz" if i is divisible by both 3 and 5, "Fizz" if only by 3, "Buzz" if only by 5, otherwise the number i itself.

const fizzBuzz = (number) => {

    let result = []
    for(let i = 1; i <= number; i++ ){
        if(i % 3 === 0 && i % 5 === 0){
            result.push("FizzBuzz")
        }else if(i % 3 === 0){
            result.push("Fizz")
        }else if(i % 5 === 0){
            result.push("Buzz")
        }else{
            result.push(i);
        }
    }
    return result;
}

console.log(fizzBuzz(5));