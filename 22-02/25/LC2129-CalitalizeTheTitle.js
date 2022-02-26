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
  let newTitle = '';
  let curWord = '';
  for (const char of title) {
    if (char === ' ') {
      if (curWord.length < 3) {
        newTitle = newTitle + ' ' + curWord;
      } else {
        newTitle = newTitle + ' ' + curWord.slice(0, 1).toUpperCase() + curWord.slice(1);
      }
      curWord = '';
    } else {
      curWord += char.toLowerCase();
    }
  }
  if (curWord.length < 3) {
    newTitle = newTitle + ' ' + curWord;
  } else {
    newTitle = newTitle + ' ' + curWord.slice(0, 1).toUpperCase() + curWord.slice(1);
  }

  return newTitle.trim();
};