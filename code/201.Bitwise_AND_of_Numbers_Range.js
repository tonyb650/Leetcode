/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
  let pos = 0
  while(left!=right){
    left=left>>1
    right = right >> 1
    pos++
  }
  return right << pos;
};

// **Strategy for solving**\
// The left-most (most significant) bits that both numbers share will be the solution. For example:
// 15 = 1111
// 13 = 1101
// So the two numbers share a bit in 8's place and a bit in the 4's place. So the solution will be 12 (1100)
// Therefore,
// Step 1: Keep shifting both numbers right until the two numbers match. 
// Step 2: Shift back by the number of right shifts in step one (filling right side with zeros) 