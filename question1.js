/*  
  Question#1: 
    Write a function that will take an array as input, sort and return the array in descending order.
    For Example, if array is[3, 2, 7, 4, 6, 9] the result should be[9, 7, 6, 4, 3, 2]. 
*/

function sortInDescending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        // swapping
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const inputArray = [3, 2, 7, 4, 6, 9];

const result = sortInDescending(inputArray);

console.log(result);
