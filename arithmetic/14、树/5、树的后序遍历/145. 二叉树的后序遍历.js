// 给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。

//

// 示例 1：

// 输入：root = [1,null,2,3]
// 输出：[3,2,1]
// 示例 2：

// 输入：root = []
// 输出：[]
// 示例 3：

// 输入：root = [1]
// 输出：[1]
//

// 提示：

// 树中节点的数目在范围 [0, 100] 内
// -100 <= Node.val <= 100
//

// 进阶：递归算法很简单，你可以通过迭代算法完成吗？

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/binary-tree-postorder-traversal
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
var postorderTraversal = function (root) {
  // 递归实现
  // const res = [];
  // function postorder(root) {
  //   if (!root) return;
  //   postorder(root.left);
  //   postorder(root.right);
  //   res.push(root.val);
  // }
  // postorder(root);
  // return res;
  // 迭代实现
  const stack = [];
  const res = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      result.unshift(root.val);
      root = root.right;
    }
    root = stack.pop();
    root = root.left;
  }
  return res;
};
