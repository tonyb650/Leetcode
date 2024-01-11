// RECURSIVE
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  if (!root) return [];
  let res = []
  function helper(node){
      if( node.left != null){
          helper(node.left);
      }
      if (node.right != null){
          helper(node.right);
      } 
      res.push(node.val);
  }
  helper(root);
  return res;
};


// ITERATIVE
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  if (!root) return [];
  let res = [];
  let stack = [];
  stack.push(root);
  while( stack.length > 0 ){
      currentNode = stack.pop();
      res.unshift(currentNode.val);
      if (currentNode.left != null){
          stack.push(currentNode.left);
      }
      if (currentNode.right != null) {
          stack.push(currentNode.right);
      }
  }
return res;
};