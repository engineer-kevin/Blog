// 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。

//  

// 示例 1：


// 输入：head = [1,1,2]
// 输出：[1,2]
// 示例 2：


// 输入：head = [1,1,2,3,3]
// 输出：[1,2,3]
//  

// 提示：

// 链表中节点数目在范围 [0, 300] 内
// -100 <= Node.val <= 100
// 题目数据保证链表已经按升序 排列

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/remove-duplicates-from-sorted-list
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
var deleteDuplicates = function(head) {
  if (!head) return head;
  let curr = head;
  while (curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};

console.log(deleteDuplicates(makeList([1,1,2,3,3])));

// 链表构造函数
function ListNode (val, next) {
  this.val = val === undefined ? 0 : val,
  this.next = next === undefined ? null : next
}

// 链表数据结构实现
function makeList(arr) {
  let list = null;
  arr.forEach((item) => {
    if (!list) {
      list = tail = new ListNode(item);
    } else {
      tail.next = new ListNode(item);
      tail = tail.next;
    }
  })
  return list;
}
