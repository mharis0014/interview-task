/* 
  Question#2: 
    Write a function that will take a string as input, check and return if it is palindrome or
    not. For example, if the string is “madam” the function should return true and if the string
    is “doctor” it should return false.
*/

function checkPalindrome(text) {
  let firstHalf = Math.floor(text.length / 2);

  for (let i = 0; i < firstHalf; i++) {
    if (text[i] !== text[text.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

const text = "madam";

const result = checkPalindrome(text);

result
  ? console.log(`${text} is palindrome`)
  : console.log(`${text} is not palindrome`);
