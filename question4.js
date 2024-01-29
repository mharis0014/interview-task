/*
  Question#4: 
    Write a function that will take an array as input and return an array with every missing
    element from 0 to the highest entry. For example, in an array [3,4,9,1,7,3,2,6] the highest
    entry is 9, and missing numbers are [0,5,8]
*/

function findMissingNumbers(arr) {
  let highestNumber = 0;

  // set hightest num
  arr.forEach((num) => num > highestNumber && (highestNumber = num));

  const missingNumbers = [];

  // loop till highest
  for (let i = 0; i <= highestNumber; i++) {
    let isMissing = true;

    for (let j = 0; j < arr.length; j++) {
      // match both and if matched set missing false
      if (arr[j] === i) {
        isMissing = false;
        break;
      }
    }
    if (isMissing) {
      missingNumbers.push(i);
    }
  }

  return missingNumbers;
}

const testArray = [3, 4, 9, 1, 7, 3, 2, 6];

const missingNumbersArray = findMissingNumbers(testArray);

console.log(missingNumbersArray);
