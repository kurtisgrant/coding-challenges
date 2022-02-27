/*
  LeetCode #2129: 
  Capitalize the Title

  https://leetcode.com/problems/capitalize-the-title/
  
  You are given a string title consisting of one or more words separated by a single space, where each word consists of English letters. Capitalize the string by changing the capitalization of each word such that:
  
  If the length of the word is 1 or 2 letters, change all letters to lowercase.
  Otherwise, change the first letter to uppercase and the remaining letters to lowercase.
  
  Return the capitalized title.

*/

/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
  return title
    .toLowerCase()
    .split(' ')
    .map(word => word.length < 3 ? 
      word : 
      word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(' ');
};
