/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let pointer1 = 0
  let pointer2 = 0
  while(pointer2 < nums.length){
      if(nums[pointer1] >= nums[pointer2]){
          pointer2 += 1;
      } else {
          nums[pointer1+1] = nums[pointer2];
          pointer1 += 1;
      }
  }
  return pointer1+1;
};