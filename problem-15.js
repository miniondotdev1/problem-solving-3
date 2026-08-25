// Split an array into groups of the given size. The final group may be smaller if there are not enough elements left.

const chunk = (arr, size) => {
    const result = []
    for(let i = 0; i < arr.length; i += size){
        result.push(arr.slice(i, i + size));
    }
    return result;
}

console.log(chunk([1,2,3,4,5],2));