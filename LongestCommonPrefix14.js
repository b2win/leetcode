// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

/*
 * @param {string[]} strs
 * @return {string}
 */

// var longestCommonPrefix = function (strs) {
//   if (strs.length === 0) return "";
//   prefix = strs[0];
//   for (let i = 1; i < strs.length; i++)
//     while (strs[i].indexOf(prefix) !== 0) {
//       prefix = prefix.substring(0, prefix.length() - 1);
//       if (prefix.isEmpty()) return "";
//     }
//   return prefix;
// };

// 정답

var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  for (let i = 0; i < strs[0].length; i++) {
    // i = f, l, o, w, e, r
    for (let s of strs) {
      // s = flower, flow, flight
      if (s[i] !== strs[0][i]) {
        return s.slice(0, i);
      }
    }
  }
  return strs[0];
};
