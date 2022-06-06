// 给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

// 你可以假设除了数字 0 之外，这两个数字都不会以零开头。

// 示例1：

// 输入：l1 = [7,2,4,3], l2 = [5,6,4]
// 输出：[7,8,0,7]
// 示例2：

// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[8,0,7]
// 示例3：

// 输入：l1 = [0], l2 = [0]
// 输出：[0]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/add-two-numbers-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const stack1 = []
  const stack2 = []
  while (l1) {
    stack1.push(l1.val)
    l1 = l1.next
  }
  while (l2) {
    stack2.push(l2.val)
    l2 = l2.next
  }

  let carry = 0
  let tail = null
  while (stack1.length > 0 || stack2.length > 0 || carry > 0) {
    const val1 = stack1.length ? stack1.pop() : 0
    const val2 = stack2.length ? stack2.pop() : 0
    const sum = val1 + val2 + carry
    carry = Math.floor(sum / 10)
    const curr = new ListNode(sum % 10)
    curr.next = tail
    tail = curr
  }

  return tail
};


function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function makeList(arr) {
  let list = null
  arr.forEach((item) => {
    if (!list) {
      list = tail = new ListNode(item)
    } else {
      tail.next = new ListNode(item)
      tail = tail.next
    }
  })
  return list
}


console.log(addTwoNumbers(makeList([1,2,4]), makeList([5,6,4])));
console.log(addTwoNumbers(makeList([5]), makeList([5])));