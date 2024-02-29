//function that takes a list of numbers and returns every number before zero
function numbersBeforeZero(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
      return result;
    }
    result.push(numbers[i]);
  }
  return result;
}

// test cases for numbersBeforeZero
console.log(numbersBeforeZero([1, 2, 3, 0, 4, 5])); // [1, 2, 3]
console.log(numbersBeforeZero([0, 1, 2, 3, 4, 5])); // []
console.log(numbersBeforeZero([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(numbersBeforeZero([0])); // []