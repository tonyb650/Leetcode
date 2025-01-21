/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {                  // Constraints indicate that preorder and inorder will be the same length
  if(preorder == []) return null;                              // If the length (of either) is less than one, then return null for root node
  let values = inorder.reduce((map, val, idx) => {             // Create a hashmap (object) from inorder array where key = 'val' and value = "index"
    map[val] = idx;
    return map;
  }, {});
  let leftPtr = 0;                                             // Set up leftPtr and rightPtr. These define the span of values in inorder that are 'eligible' for creating nodes
  let rightPtr = inorder.length;
  function helper(leftPtr, rightPtr){                          // 'helper' will create a node using the left-most value in preorder array, as long as there is still space in the inorder 'span'
      if(rightPtr < leftPtr) {                                 // If the pointers have 'crossed over' each other, then this isn't a valid place to create a new node
          return null;
      }
      let currentVal = preorder.shift()                        // Shift out the first value in the preorder array, we will use this for the node we are about to make (I imagine that we could use an incrementing pointer rather shifting and it may save time)
      let currentNode = new TreeNode (currentVal)              // Create the node
      let currentIndex = values[currentVal]                    // So, in the inoroder array, at what index do we find this current value?
      if( preorder.length >0){                                 // Is there more left in preorder?
          currentNode.left = helper(leftPtr, currentIndex-1)   // If so, try filling left child by calling helper with appropriate pointer positions for the 'left side' of inorder array
      }
      if( preorder.length >0){                                 // Still more in preorder?
          currentNode.right = helper(currentIndex+1, rightPtr) // Then try filling right child by calling helper with 'right side' of inorder array
      }
      return currentNode                                       // All of our recursive calls to helper are complete, return the root node
  }
  root = helper(leftPtr, rightPtr)                             // Call helper with with pointers set for the entire span of inorder array
  return root;                                                 // Return the end result of what 'helper' came up with
};