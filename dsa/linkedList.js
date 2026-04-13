/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null
    let curr = head

    while(curr !== null){
        let tempNext = curr.next  // save the next node
        // reverse
        curr.next = prev
        prev = curr
        // move the node forward
        curr = tempNext
    }
	// return prev
    return prev
};

// ---------------------------------------------------------------------------
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let onePointer = head
    let secPointer = head
    while(secPointer !== null && secPointer.next !== null){
        onePointer = onePointer.next
        secPointer = secPointer.next.next
        // Both at the same node
        if(onePointer === secPointer) return true
    }
    return false
};
// ----------------------------------------------------------- 
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
    // create a new node and insert linked list node init
    let tempNode = new ListNode(0, null)
    let mergedNode = tempNode
    let curr1 = list1
    let curr2 = list2
    while(curr1 !== null && curr2 !== null){
        if(curr1.val < curr2.val){
            mergedNode.next = curr1
            mergedNode = curr1
            curr1 = curr1.next
        }else {
            mergedNode.next = curr2
            mergedNode = curr2
            curr2 = curr2.next
        }
    }
    // merge the remaning elements,
    // NOTE: It's if and else not while loop
    if(curr1 !== null){
        mergedNode.next = curr1
    }
    if(curr2 !== null){
        mergedNode.next = curr2
    }
    return tempNode.next
};

