// 给你一个二叉树的根节点 root ， 检查它是否轴对称。

//

// 示例 1：

// 输入：root = [1,2,2,3,4,4,3]
// 输出：true
// 示例 2：

// 输入：root = [1,2,2,null,3,null,3]
// 输出：false
//

// 提示：

// 树中节点数目在范围 [1, 1000] 内
// -100 <= Node.val <= 100
//

// 进阶：你可以运用递归和迭代两种方法解决这个问题吗？

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/symmetric-tree
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
 * @return {boolean}
 */
//// 迭代实现
// var isSymmetric = function (root) {
//   return dfs(root.left, root.right);
// };

// function dfs(left, right) {
//   if (left === null && right === null) return true;
//   if (left === null || right === null) return false;
//   if (left.val !== right.val) return false;
//   // 再递归的比较 左节点的左孩子 和 右节点的右孩子
//   // 以及比较  左节点的右孩子 和 右节点的左孩子
//   return dfs(left.left, right.right) && dfs(right.left, left.right);
// }

// 迭代实现 bfs queue
var isSymmetric = function (root) {
  const queue = [];
  queue.push(root.left, root.right);
  while (queue.length) {
    const left = queue.shift();
    const right = queue.shift();
    if (left === null && right === null) continue;
    if (left === null || right === null) return false;
    if (left.val !== right.val) return false;
    queue.push(left.left, right.right);
    queue.push(left.right, right.left);
  }
  return true;
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

console.log(isSymmetric(array2binary([1, 2, 2, 3, 4, 4, 3])));
console.log(isSymmetric(array2binary([1, 2, 2, null, 3, null, 3])));
