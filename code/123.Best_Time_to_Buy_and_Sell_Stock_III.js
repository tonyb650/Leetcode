/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length < 2) return 0
  
  let rightProfit = []
  let bestProfitAtThisPosition = 0
  let max = 0
  for (let i = prices.length - 1; i >= 0; i--) {
    max = Math.max(max, prices[i])
    bestProfitAtThisPosition = Math.max(bestProfitAtThisPosition, max - prices[i])
    rightProfit[i] = bestProfitAtThisPosition
  }
  
  let profit = 0
  bestProfitAtThisPosition = 0
  let min = Infinity
  for (let i = 0; i < prices.length; i++) {
      min = Math.min(min, prices[i])
      bestProfitAtThisPosition = Math.max(bestProfitAtThisPosition, prices[i] - min)
      profit = Math.max(profit, rightProfit[i] + bestProfitAtThisPosition)
  }
  
  return profit
};