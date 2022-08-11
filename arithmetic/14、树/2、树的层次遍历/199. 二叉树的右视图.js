// 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

//  

// 示例 1:



// 输入: [1,2,3,null,5,null,4]
// 输出: [1,3,4]
// 示例 2:

// 输入: [1,null,3]
// 输出: [1,3]
// 示例 3:

// 输入: []
// 输出: []
//  

// 提示:

// 二叉树的节点个数的范围是 [0,100]
// -100 <= Node.val <= 100 

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/binary-tree-right-side-view
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
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
var rightSideView = function (root) {
  if (root === null) return [];
  const queue = [root];
  const res = [];
  while (queue.length) {
    let size = queue.length;
    while (size > 0) {
      const node = queue.shift();
      if (size === 1) res.push(node.val);
      
      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }

      size--;
    }
  }

  return res;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// 迭代实现
const array2binary = (arr) => {
  if (!arr || !arr.length) {
    return null;
  }
  let index = 0;
  const queue = [];
  const len = arr.length;
  const head = new TreeNode(arr[index]);
  queue.push(head);

  while (index < len) {
    index++;
    const parent = queue.shift();
    if (arr[index] !== null && arr[index] !== undefined) {
      const node = new TreeNode(arr[index]);
      parent.left = node;
      queue.push(node);
    }

    index++;
    if (arr[index] !== null && arr[index] !== undefined) {
      const node = new TreeNode(arr[index]);
      parent.right = node;
      queue.push(node);
    }
  }
  return head;
};

console.log(rightSideView(array2binary([1, 2, 3, null, 5, null, 4])));
console.log(rightSideView(array2binary([1, null, 3])));
console.log(rightSideView(array2binary([])));