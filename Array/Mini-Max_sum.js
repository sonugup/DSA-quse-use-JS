// Given five positive integers, find the minimum and maximum values that 
// can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single 
// line of two space-separated long integers.

output = 18 22

function miniMaxSum(arr) {
   arr.sort((a, b) => a - b);
const minSum = arr.slice(0, 4).reduce((acc, curr) => acc + curr);
const maxSum = arr.slice(1).reduce((acc, curr) => acc + curr);
console.log(`${minSum} ${maxSum}`);
}

const arr=[3, 4, 5, 6, 7]

miniMaxSum(arr)

