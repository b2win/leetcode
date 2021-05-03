// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

/*
 * @param {string} s
 * @return {boolean}
 */

const isValid = function (s) {
  const temp = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];
  const keys = Object.keys(temp);
  for (let i = 0; i < s.length; i++) {
    if (keys.includes(s[i])) {
      stack.push(s[i]);
    } else {
      if (temp[stack[stack.length - 1]] === s[i]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return !stack.length;
};
