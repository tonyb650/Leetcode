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
var inorderTraversal = function(root) {
    let result = []
    const processNode = (node) => {
        if(!node){
            return;
        }
        processNode(node.left);
        result.push(node.val);
        processNode(node.right);
    }
    processNode(root);
    return result;
};


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
var inorderTraversal = function (root) {
    if (!root) return [];
    let stack = [];
    let result = [];
    let currentNode = root;
    while(stack.length > 0  || currentNode != null){    
        while(currentNode != null){                          // We check currentNode first, if it is null then we move down to checking the stack
            stack.push(currentNode)                         // Whenever currentNode is non-null, we add it to the stack
            currentNode = currentNode.left                  // Set currentNode.left as currentNode. It might be null, which means this loop will be exited
        }
        currentNode = stack.pop()                           // No more left children so set currentNode to top node in stack and pop this one from the stack
        result.push(currentNode.val)                        // Every time we pop, we add the value to result array
        currentNode = currentNode.right;                    // Set currentNode.right as currentNode. If there is none, the outer while loop will end
    }
    return result;
}