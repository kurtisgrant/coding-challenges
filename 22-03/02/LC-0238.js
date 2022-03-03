/*
  LeetCode #238: 
  Product of Array Except Self

  https://leetcode.com/problems/product-of-array-except-self/
  
  Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

  The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

  You must write an algorithm that runs in O(n) time and without using the division operation.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    answer.push(nums
      .filter((_, idx) => i !== idx)
      .reduce((a, c) => a * c)
    );
  }
  return answer;
}; // 14.23

var productExceptSelf = function(nums) {
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    answer.push(nums
      .reduce((a, c, ind) => {
        const factor = ind === i ? 1 : c;
        return factor * a;
      })
    );
  }
  return answer;
}; // 18.12

// Watched explaination before this implementation (not working yet though)
var productExceptSelf = function(nums) {
  const answer = [];
  const firstLoop = [1];
  const secondLoop = [1];
  let prev = 1;
  for (let i = 1; i < nums.length; i++) {
    firstLoop.push(nums[i] * prev);
    prev *= nums[i];
  }
  prev = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    secondLoop.push(nums[i] * prev);
    prev *= nums[i];
  }
  secondLoop.reverse();
  for (let i = 0; i < nums.length; i++) {
    answer.push(firstLoop[i] * secondLoop[i]);
  }
  return answer;
}; // 49.10

