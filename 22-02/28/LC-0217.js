/*
  LeetCode #217: 
  Contains Duplicate

  https://leetcode.com/problems/contains-duplicate/
  
  Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// First attempt which works, but is very slow
var containsDuplicate = function(nums) {
  const numsFound = [];
  for (let i = 0; i < nums.length; i++) {
    if (numsFound.includes(nums[i])) return true;
    numsFound.push(nums[i]);
  }
  return false;
};

// Second attempt, much faster. 
// Array.includes() must be a slow method
var containsDuplicate = function(nums) {
  const numsFound = {};
  for (let i = 0; i < nums.length; i++) {
    if (numsFound[nums[i]] !== undefined) return true;
    numsFound[nums[i]] = true;
  }
  return false;
};