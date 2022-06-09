// 给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。

//  

// 示例 1：


// 输入：head = [1,2,3,3,4,4,5]
// 输出：[1,2,5]
// 示例 2：


// 输入：head = [1,1,1,2,3]
// 输出：[2,3]
//  

// 提示：

// 链表中节点数目在范围 [0, 300] 内
// -100 <= Node.val <= 100
// 题目数据保证链表已经按升序 排列

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii
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
  // 单指针
  // const dummy = new ListNode(-1, head);
  // let cur = dummy;
  // while (cur.next && cur.next.next) {
  //   if (cur.next.val === cur.next.next.val) {
  //     const val = cur.next.val;
  //     while (cur.next && val === cur.next.val) {
  //       cur.next = cur.next.next;
  //     }
  //   } else {
  //     cur = cur.next;
  //   }
  // }

  // return dummy.next;

  // 双指针
  const dummy = new ListNode(-1, head);
  let pre = dummy;
  let cur = head;
  while (cur && cur.next) {
    if (pre.next.val === cur.next.val) {
      while (cur && cur.next && pre.next.val === cur.next.val) {
        cur = cur.next;
      }
      pre.next = cur.next;
      cur = cur.next;
    } else {
      pre = pre.next;
      cur = cur.next;
    }
  }
  return dummy.next;
};

console.log(deleteDuplicates(makeList([1, 2, 3, 3, 4, 4, 5])));

// 链表构造函数
function ListNode (val, next) {
  this.val = val === undefined ? 0 : val,
  this.next = next === undefined ? null : next
}

// 链表数据结构实现
function makeList (arr) {
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