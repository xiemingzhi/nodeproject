function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/*
 * Assume l1, l2 not empty, The digits are stored in reverse order and each of their nodes contain a single digit. 
 * input: (2 -> 4 -> 3) + (5 -> 6 -> 4) [2,4,3] [5,6,4]
 * Output: 7 -> 0 -> 8
 * 342 + 465 = 807
 * [1,8]
 * [0]
 * [1,8] //different lengths
 * [0]
 * [1,8]
 * [1,8] //different lengths
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
*/
var addTwoNumbers = function(l1, l2) {
    currNode1 = l1
    currNode2 = l2
    sum = ''
    carry = 0
    while (currNode1 != null) {
        if (currNode2 != null) sumInt = carry + (currNode1.val + currNode2.val)
        else sumInt = carry + (currNode1.val)
        if (sumInt >= 10) { 
            carry = 1
            sumInt = sumInt - 10
        } else {
            carry = 0
        }
        sum = sumInt + sum
        currNode1 = currNode1.next
        if (currNode2 != null) currNode2 = currNode2.next
    }
    while(currNode2 != null) {
        sumInt = carry + (currNode2.val)
        if (sumInt >= 10) { 
            carry = 1
            sumInt = sumInt - 10
        } else {
            carry = 0
        }
        sum = sumInt + sum
        currNode2 = currNode2.next
    }
    if (carry != 0) {
        sum = carry + sum
    }
    retSum = null
    for (i = 0; i < sum.length; i++) {
        retSum = new ListNode(sum[i], retSum)
    }
    return retSum
};

let ll13 = new ListNode(3, null)
let ll12 = new ListNode(4, ll13)
let ll1 = new ListNode(2, ll12)

let ll23 = new ListNode(4, null)
let ll22 = new ListNode(6, ll23)
let ll2 = new ListNode(5, ll22)

console.log(addTwoNumbers(ll1, ll2))