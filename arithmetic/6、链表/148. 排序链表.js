// 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
// 示例 1：

// 输入：head = [4,2,1,3]
// 输出：[1,2,3,4]
// 示例 2：

// 输入：head = [-1,5,3,4,0]
// 输出：[-1,0,3,4,5]
// 示例 3：

// 输入：head = []
// 输出：[]

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/sort-list
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
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
var sortList = function(head) {
  if (!head || !head.next) return head

  let slow = head
  let fast = head
  let prevSlow = null // prevSlow指向slow前一个节点
  while (fast && fast.next) {
    prevSlow = slow
    slow = slow.next
    fast = fast.next.next
  }
  prevSlow.next = null
  return merge(sortList(head), sortList(slow))

  function merge(left, right) {
    const dummy = new ListNode(0)
    let prev = dummy
    while (left && right) {
      if (left.val <= right.val) {
        prev.next = left
        left = left.next
      } else {
        prev.next = right
        right = right.next
      }
      prev = prev.next
    }

    if (left) prev.next = left
    if (right) prev.next = right
    return dummy.next
  }
};