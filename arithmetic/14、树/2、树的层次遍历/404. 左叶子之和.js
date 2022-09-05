// 给定二叉树的根节点 root ，返回所有左叶子之和。

//  

// 示例 1：



// 输入: root = [3,9,20,null,null,15,7] 
// 输出: 24 
// 解释: 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
// 示例 2:

// 输入: root = [1]
// 输出: 0
//  

// 提示:

// 节点数在 [1, 1000] 范围内
// -1000 <= Node.val <= 1000

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/sum-of-left-leaves
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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  // if (root === null) return 0;
  // if (root.left === null && root.right === null) return 0;
  // const left = sumOfLeftLeaves(root.left) + root.val;
  // return left + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);

  // 广度优先搜索
  let ans = 0;
  const queue = [root];
  while(queue.length) {
    const node = queue.shift();
    const left = node.left;
    if (left) {
      if (left.left === null && left.right === null) { // 叶子节点
        ans += left.val;
      } else {
        queue.push(left);
      }
    }

    if (node.right) {
      queue.push(node.right);
    }
  }
  return ans;
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

console.log(sumOfLeftLeaves(array2binary([3, 9, 20, null, null, 15, 7])));