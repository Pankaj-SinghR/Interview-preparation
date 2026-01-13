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
//
