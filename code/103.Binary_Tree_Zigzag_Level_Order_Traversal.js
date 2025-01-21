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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) {                                // If root is empty, return empty array
        return [];
    }
    let q = [];                                 // Initialize deque
    q.push(root);                               // enqueue 'root'
    q.push(null);                               // enqueue null (delimiter)
    let leftToRight = true;                     // set initial direction for adding to subArray
    let subArray = [];                          // Initialize subArray
    let result = [];                            // Initialize result array that will hold final result
    while(q.length > 0){
        const currentNode = q.shift();          // Dequeue the left-most node as 'currentNode'
        if(currentNode != null){
            if(leftToRight){
                subArray.push(currentNode.val); // if 'left first', add node value to back of array
            } else { //(RightToLeft)
                subArray.unshift(currentNode.val); // if 'right first, add node to left front of array
            }
            if(currentNode.left){
                q.push(currentNode.left);       // add left child to queue
            }
            if(currentNode.right){
                q.push(currentNode.right);      // add right child to queue 
            }
        } else {
            result.push(subArray);              // push subArray (level array) to result
            subArray = [];                      // clear sub
            leftToRight = !leftToRight;         // reverse leftToRight
            if(q.length  > 0) {                 // if there is another level to process, 
                q.push(null);                   // add null element (delimiter) to end of queue
            } 
        }
    }
    return result;
};