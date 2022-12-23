// 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。

//

// 示例 1:

// 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// 输出: [3,9,20,null,null,15,7]
// 示例 2:

// 输入: preorder = [-1], inorder = [-1]
// 输出: [-1]
//

// 提示:

// 1 <= preorder.length <= 3000
// inorder.length == preorder.length
// -3000 <= preorder[i], inorder[i] <= 3000
// preorder 和 inorder 均 无重复 元素
// inorder 均出现在 preorder
// preorder 保证 为二叉树的前序遍历序列
// inorder 保证 为二叉树的中序遍历序列

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (inorder.length === 0) return null;

  let root = new TreeNode(preorder[0]);
  const len = preorder.length;
  for (let i = 0; i < len; i++) {
    if (preorder[0] === inorder[i]) {
      const inorderLeft = inorder.slice(0, i);
      const inorderRight = inorder.slice(i + 1, len);
      const preorderLeft = preorder.slice(1, i + 1);
      const preorderRight = preorder.slice(i + 1, len);
      root.left = buildTree(preorderLeft, inorderLeft);
      root.right = buildTree(preorderRight, inorderRight);
    }
  }

  return root;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
