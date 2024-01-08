// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

function sum(numbers) {
  let sumNum = 0;
  if (numbers.length === 0) {
    return 0;
  } else if (numbers.length) {
    for (let i = 0; i < numbers.length; i++) {
      sumNum += numbers[i];
    }
    return sumNum;
  }
}

let sumFunction = sum([1, -2, 3]);

console.log(sumFunction);
 