/*
  Question#6: 
    Write a function that will take an array as input, it will rotate the array to the right 1 time
    and return the rotated array. Rotation of the array means that each element is shifted right
    by one index. For example, the rotation of array A = [3,8,9,7,6] is [6,3,8,9,7]
*/

function rotateArrayElementsRight(arr) {
  const totalElements = arr.length;
  const lastIndex = totalElements - 1;
  const lastElement = arr[lastIndex];

  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = lastElement;

  return arr;
}
