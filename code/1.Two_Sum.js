/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let hashMap = new Map();                    // HashMap will hold each number along with its index { number : index} 
  for(let i = 0; i < nums.length; i++){       // loop through array of 'nums'
      let current = nums[i];             
      let pair = target - current;            // 'pair' is the value for the potential complement of the current number
      if (hashMap.has(pair)){                 // is that potential complement already in the hashMap?
          return [hashMap.get(pair),i];       // if yes, we are done. Return the value(index) from the hashMap and the current index as an array of two numbers
      }
      hashMap.set(current,i);                 // if not, add the current value to the hashMap { current_number, current_index}
  }
};