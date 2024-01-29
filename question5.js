/*
  Question#6: 
    Write a function that will take an array of numbers and return the number most repeated
    in the array with how many times it was repeated. For example, if the array is
    [4,3,5,6,4,7,9,2,4,6,3,4,6,3,4,8,5,1,5] the function should return 4 is repeated 5 times.
*/

function findMostRepeatedNumber(arr) {
  let maxRepetition = 0;
  const numRepetitionObj = {};
  let mostRepeatedNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    //  check if this number is present in obj
    const isAlreadyPresent = numRepetitionObj.hasOwnProperty(num);

    isAlreadyPresent
      ? numRepetitionObj[num]++ // yes, add one
      : (numRepetitionObj[num] = 1); // add num to obj and times = 1

    if (numRepetitionObj[num] > maxRepetition) {
      maxRepetition = numRepetitionObj[num];
      mostRepeatedNumbers = [num];
    } else if (numRepetitionObj[num] === maxRepetition) {
      mostRepeatedNumbers.push(num);
    }
  }

  if (maxRepetition === 1) {
    return "No repeated numbers";
  }

  const result = mostRepeatedNumbers
    .map((num) => `${num} is repeated ${maxRepetition} times`)
    .join("\n");

  return result;
}

const testArr = [4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5];
const result = findMostRepeatedNumber(testArr);

console.log(result);
