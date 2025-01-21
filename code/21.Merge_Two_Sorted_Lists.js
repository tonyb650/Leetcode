// RECURSIVE SOLUTION

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (list1 == null ){
        return list2;
    } else if (list2 == null){
        return list1;
    } else if (list1.val < list2.val){
        list1.next = mergeTwoLists(list1.next,list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1,list2.next);
        return list2;
    }
};


// ITERATIVE SOLUTION
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // edge cases
    if(list1 == null && list2 == null) return null;
    if(list1 == null) return list2;
    if(list2 == null) return list1;
    //main logic
    let preHead = new ListNode(-1)
    let prev = preHead
    while (list1 != null && list2 !=null) {
        if(list1.val < list2.val) {
            prev.next = list1
            list1 = list1.next
        } else {
            prev.next = list2
            list2 = list2.next
        }
        prev = prev.next
    }
    if(list1 != null){
        prev.next = list1
    }
    if(list2 != null){
        prev.next = list2
    }
    return preHead.next
};