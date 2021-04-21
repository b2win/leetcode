// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

// const isPalindrome = function(x) {
//     if (x < 0 || (x % 10 === 0 ) {
//         return false;
//         }
//     let reversed = 0
// };

const isPalindrome = (x) => {
  if (x < 0) return false;

  let reversed = 0,
    y = x;

  while (y > 0) {
    const lastDigit = y % 10;
    reversed = reversed * 10 + lastDigit;
    y = (y / 10) | 0;
  }
  return x === reversed;
};
