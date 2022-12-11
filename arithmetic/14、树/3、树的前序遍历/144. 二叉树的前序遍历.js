// 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

//

// 示例 1：

// 输入：root = [1,null,2,3]
// 输出：[1,2,3]
// 示例 2：

// 输入：root = []
// 输出：[]
// 示例 3：

// 输入：root = [1]
// 输出：[1]
// 示例 4：

// 输入：root = [1,2]
// 输出：[1,2]
// 示例 5：

// 输入：root = [1,null,2]
// 输出：[1,2]
//

// 提示：

// 树中节点数目在范围 [0, 100] 内
// -100 <= Node.val <= 100
//

// 进阶：递归算法很简单，你可以通过迭代算法完成吗？

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/binary-tree-preorder-traversal
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
var preorderTraversal = function (root) {
  // 递归实现
  // const ans = [];
  // function dfs (root, path) {
  //   if (root === null) return;
  //   path.push(root.val);
  //   dfs(root.left, path);
  //   dfs(root.right, path);
  // }
  // dfs(root,ans);
  // return ans;

  // 迭代实现
  if (root === null) return [];
  const res = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    res.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }

    if (node.left) {
      stack.push(node.left);
    }
  }

  return res;
};
