/* 
  Question#3: 
    Write a function that will take an array as input and return the sum of the two largest
    numbers in a n array. For example, in the array [3,7,1,5,11,19] the result would be 30
    because 11 and 19 are the largest numbers.
*/

function sumOfTwoLargest(arr) {
  let large1 = 0;
  let large2 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large1) {
      large1 = large2;
      large1 = arr[i];
    } else if (arr[i] > large2) {
      large2 = arr[i];
    }
  }
  const sum = large1 + large2;
  return sum;
}

const arr = [6, 22, 8, 1, 18, 7];

const result = sumOfTwoLargest(arr);
console.log(`Sum of two largest numbers is: ${result}`);
