/*
  LeetCode #127: 
  Best Time to Buy and Sell Stock

  https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
  
  You are given an array prices where prices[i] is the price of a given stock on the ith day.

  You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

  Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

*/

/**
 * @param {number[]} prices
 * @return {number}
 */

// This is a solution, however I think it is 
// on the order of (n log n). I think I can
// do better.
var maxProfit = function(prices) {

  let maxProfit = -Infinity;

  for (let i = 0; i < prices.length; i++) {
    const buyPrice = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      const sellPrice = prices[j];
      if (sellPrice - buyPrice > maxProfit) {
        maxProfit = sellPrice - buyPrice;
      }
    }
  }
  return maxProfit > 0 ? maxProfit : 0;
};

