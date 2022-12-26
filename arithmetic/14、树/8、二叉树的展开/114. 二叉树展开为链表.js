// 给你二叉树的根结点 root ，请你将它展开为一个单链表：

// 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
// 展开后的单链表应该与二叉树 先序遍历 顺序相同。
//

// 示例 1：

// 输入：root = [1,2,5,3,4,null,6]
// 输出：[1,null,2,null,3,null,4,null,5,null,6]
// 示例 2：

// 输入：root = []
// 输出：[]
// 示例 3：

// 输入：root = [0]
// 输出：[0]
//

// 提示：

// 树中结点数在范围 [0, 2000] 内
// -100 <= Node.val <= 100
//

// 进阶：你可以使用原地算法（O(1) 额外空间）展开这棵树吗？

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/flatten-binary-tree-to-linked-list
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (root === null) {
    return;
  }
  // 将根节点的左子树变成链表
  flatten(root.left);
  // 将根节点的右子树变成链表
  flatten(root.right);
  const tmp = root.right;
  // 把树的右边换成左边的链表
  root.right = root.left;
  // 将左边置空
  root.left = null;
  // 找到树的最右边的节点
  while (root.right !== null) {
    root = root.right;
  }
  // 把右边的链表接到刚才树的最右边的节点
  root.right = tmp;
};
