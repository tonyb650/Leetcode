// BFS approach
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
var minDepth = function(root) {
  if (!root) return 0;
  let q = [[root,1]]

  while (q.length >0) {
      let [currNode, currentLevel] = q.shift()
      if(currNode.left == null && currNode.right == null){
          return currentLevel
      }
      if(currNode.left !== null){
          q.push([currNode.left,currentLevel+1])
      }
      if(currNode.right !== null){
          q.push([currNode.right, currentLevel +1 ])
      } 
  }
};

// DFS approach

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
var minDepth = function(root) {
  if (root === null) return 0;                // Base case for recursion, return from DFS
  if (root.left === null) {                   // Dead end to the left,
      console.log("left child is null at " + root.val+". Checking depth to the right")
      return 1 + minDepth(root.right)         // Add 1 plus result of search to the right
  }
  if (root.right === null) {                  // Dead end to the right
      console.log("right child is null at " + root.val+". Checking depth to the left")
      return 1 + minDepth(root.left)          // Add 1 plus result of search to the left
  }
  console.log("neither child is null at "+root.val)
  return 1 + Math.min(minDepth(root.left),minDepth(root.right)) // Add 1 plus the minimum returned from both sides
};

/* log out:
      neither child is null at 3
      left child is null at 9. Checking depth to the right
      neither child is null at 20
      left child is null at 15. Checking depth to the right
      left child is null at 7. Checking depth to the right
*/