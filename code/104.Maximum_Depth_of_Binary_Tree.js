// TOP DOWN SOLUTION

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root){
      return 0;                                   // edge case of empty tree
  }
  let result = 0;                                 // initialize depth result
  function testNode(node, depth){                 // helper function 'testNode'
      result = Math.max(result,depth);            // increase 'result' as needed based on this recursive call
      if(node.left == null && node.right == null){ // at a leaf node, can't go further down
          return;
      }
    if(node.left != null) testNode(node.left, depth+1); // continue testing down to the left
    if(node.right != null) testNode(node.right, depth+1); // continue testing down to the right
  }
  testNode(root,1);                               // start us off with root node at level 1
  return result;
};