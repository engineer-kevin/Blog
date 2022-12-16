// 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。

//

// 示例 1：

// 输入：root = [3,1,4,null,2], k = 1
// 输出：1
// 示例 2：

// 输入：root = [5,3,6,2,4,null,null,1], k = 3
// 输出：3
//

//

// 提示：

// 树中的节点数为 n 。
// 1 <= k <= n <= 104
// 0 <= Node.val <= 104
//

// 进阶：如果二叉搜索树经常被修改（插入/删除操作）并且你需要频繁地查找第 k 小的值，你将如何优化算法？

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/kth-smallest-element-in-a-bst
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  // 递归实现
  // let index = 0;
  // let ans;
  // function inorder(root) {
  //   if (root === null) return;

  //   inorder(root.left);
  //   index++;
  //   if (k === index) {
  //     ans = root.val;
  //   }
  //   inorder(root.right);
  // }
  // inorder(root);
  // return ans;
  // 迭代实现
  const stack = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    --k;
    if (k === 0) {
      break;
    }
    root = root.right;
  }
  return root.val;
};
