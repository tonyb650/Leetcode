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
var preorderTraversal = function(root) {
    if(root === null) return [];
    let stack = [];                     // Initialize stack of nodes to process
    let result = [];                    // Initialize result array
    stack.push(root);                   // Add root to stack
    while(stack.length>0){              // Continue processing until stack is empty
        const currNode = stack.pop();   // Pop top node in stack
        result.push(currNode.val);      // Add value from popped node to result
        if(currNode.right !== null){
            stack.push(currNode.right); // If not null, add right node to stack
        }
        if(currNode.left !== null) {
            stack.push(currNode.left);  // If not null, add left node to stack
        }
    }
    return result;                      // All nodes processed, return result array
};