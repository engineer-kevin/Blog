// 给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。

//

// 示例 1:

// 输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// 输出：[3,9,20,null,null,15,7]
// 示例 2:

// 输入：inorder = [-1], postorder = [-1]
// 输出：[-1]
//

// 提示:

// 1 <= inorder.length <= 3000
// postorder.length == inorder.length
// -3000 <= inorder[i], postorder[i] <= 3000
// inorder 和 postorder 都由 不同 的值组成
// postorder 中每一个值都在 inorder 中
// inorder 保证是树的中序遍历
// postorder 保证是树的后序遍历

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const len = postorder.length;
  if (postorder.length === 0) return null;
  const head = postorder[len - 1];
  let root = new TreeNode(head);
  for (let i = 0; i < len; i++) {
    if (head === inorder[i]) {
      const inorderLeft = inorder.slice(0, i);
      const inorderRight = inorder.slice(i + 1, len);
      const postorderLeft = postorder.slice(0, i);
      const postorderRight = postorder.slice(i, len - 1);
      root.left = buildTree(inorderLeft, postorderLeft);
      root.right = buildTree(inorderRight, postorderRight);
    }
  }
  return root;
};
