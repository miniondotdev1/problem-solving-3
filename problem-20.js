// Both input arrays are already sorted ascending. Return one sorted array containing all their elements. Duplicates are kept.

const mergeSorted = (a, b) => {
    const marge = [...a, ...b]
    const sorted = marge.sort((a, b) => a - b)
    return sorted
}

console.log(mergeSorted([1, 3, 5], [2, 4, 6]));
console.log(mergeSorted([1, 5, 9], [2, 3]));