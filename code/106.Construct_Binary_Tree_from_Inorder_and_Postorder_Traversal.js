/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

var buildTree = function(inorder, postorder) {

  let inorderMap = {}                                     // We create a hashmap/object to hold the indexes of each value in the inorder traversal
  for(let i = 0; i < inorder.length; i++){                // This will make it easy to look up 'where' in the inorder traversal each value is
      inorderMap[inorder[i]] = i
  }

  function helper (leftBound, rightBound){                // leftBound and rightBound define the range within the inorder traversal
      if(leftBound > rightBound) {                        // This means there's nothing left in this 'side' of the inorder,
          return null;                                    // Hence, return null, meaning that there is no child here
      }
      /* 
      For example: if the tree looks like this:
          3
         / \
        9   20
            / \
           15  7
      inorder will look like this [ 9 , 3, 15, 20, 7 ]
      so on the first call, the traversal will split on '3' so
      the left side will be [9] and the right side will be [ 15, 20, 7]
      The 'ptr' gets moved on each recursive call until there's nothing left on the given 'side' 
      */
      const currentVal = postorder.pop();                 // We are always using the rightmost/last value for our current node
      let currentNode = new TreeNode(currentVal)
      let ptr = inorderMap[currentVal]                    // We are going to split the inorder traversal in 'half'. Any future 'left side' children should be in the left side of 'ptr' and 'right side' children on the right side of 'ptr'
      currentNode.right = helper(ptr+1,rightBound)        // We start by attempting to add a right child. On postorder, right child will always be the last value in the traversal
      currentNode.left = helper(leftBound , ptr-1)        // After we recursively dealt with all the right child(ren), all of those values will be popped from postorder, and we can work on left child(ren) 
      return currentNode;                                 // After all recursion is complete, we will return the 'root' node
  }
  return helper(0,inorder.length-1)
};