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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if(!root) return false;
  var helper = function(node, sum){ 
      sum += node.val
      if (node.left == null && node.right == null && sum == targetSum){
          return true;
      }
      if (node.left != null){
          if(helper(node.left, sum)) return true;
      }
      if (node.right != null) {
          if(helper(node.right, sum )) return true;
      }
      return false;
          
  }
  return helper(root,0)
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if(!root) return false;
  let stack = [[root,0]];
  while(stack.length > 0){
      let [node,runningSum] = stack.pop();
      runningSum += node.val;
      if( node.left == null && node.right == null && runningSum == targetSum){
          return true;
      }
      if( node.left != null ){
          stack.push([node.left, runningSum]);
      }
      if( node.right != null ){
          stack.push([node.right,runningSum]);
      }
  }
  return false;
};

