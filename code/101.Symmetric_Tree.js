// * RECURSIVE SOLUTION * 

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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if(!root) {
    return true;
  } 
  function helper (left, right){
      if (left == null && right == null) {
          return true;
      } else if (left == null || right == null ) {
          return false;
      } else if (left.val !== right.val){
        return false;
      }
      if (!helper(left.left, right.right)) return false;
      if (!helper(left.right, right.left)) return false;
      return true;
  }
  return helper(root.left,root.right)
};

// * ITERATIVE SOLUTION *
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
 * @return {boolean}
 */

var isSymmetric = function(root) {
  if(!root || (root.left == null && root.right == null)) {
      return true;
  }
  let left = [root.left]
  let right = [root.right]
  while (left.length > 0){
      leftNode = left.pop()
      rightNode = right.pop()
      if(leftNode == null && rightNode == null) {
          // do nothing
      } else if (leftNode == null || rightNode == null){
          return false;
      } else if (leftNode.val == rightNode.val){
          left.unshift(leftNode.left)
          left.unshift(leftNode.right)
          right.unshift(rightNode.right)
          right.unshift(rightNode.left)
      } else {
          return false;
      }
  }
  return true
};