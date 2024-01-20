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
var countUnivalSubtrees = function(root) {
  let count = 0;
  function dfs(node){
      if(node == null) return false;
      if(node.left == null && node.right == null){
          count++
          return true;
      }else if(node.left != null && node.right == null){
          let leftIsUniVal = dfs(node.left)
          if(leftIsUniVal && node.val == node.left.val){
              count++
              return true;
          }
      } else if (node.left == null && node.right != null){
          let rightIsUniVal = dfs(node.right)
          if(rightIsUniVal && node.val == node.right.val){
              count++
              return true;
          }
      } else {
          let leftIsUniVal = dfs(node.left);
          let rightIsUniVal =  dfs(node.right);
          if(leftIsUniVal && rightIsUniVal && node.val==node.left.val && node.val == node.right.val){
              count++;
              return true;
          }
      }
      return false;
  }
  dfs(root);
  return count;
};