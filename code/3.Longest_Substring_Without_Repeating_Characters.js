// "Sliding Windows" approach
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length < 1) return 0;                   // Edge case. s="" return 0
  let maxLength = 1
  let left = 0
  let right = 0
  let lettersInWindow = new Map([[s[0], 0]])    // Preload map with first character
  while(right < s.length-1) {                   // While we can still extend to the right
    right++                                     // Extend window to the right
    if(lettersInWindow.has(s[right])){          // Is the right-most character already in the map?
      let oldLeft = left                        // If yes, record the existing position of 'left' pointer
      left = lettersInWindow.get(s[right])+1    // Reset 'left' pointer to the position that matches the existing right-most character at position 'right' PLUS 1
      for ( let i = oldLeft; i < left ; i++){   // Delete the entries in the map between 'old left' and 'new left'
        lettersInWindow.delete(s[i])
      }
    }
    lettersInWindow.set(s[right], right)         // Add the right-most character to the map
    maxLength = Math.max(maxLength, right-left+1)// Update maxLength as needed
  }
  return maxLength
};