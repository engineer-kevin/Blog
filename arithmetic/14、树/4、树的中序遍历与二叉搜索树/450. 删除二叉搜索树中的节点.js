// 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。

// 一般来说，删除节点可分为两个步骤：

// 首先找到需要删除的节点；
// 如果找到了，删除它。
//

// 示例 1:

// 输入：root = [5,3,6,2,4,null,7], key = 3
// 输出：[5,4,6,2,null,null,7]
// 解释：给定需要删除的节点值是 3，所以我们首先找到 3 这个节点，然后删除它。
// 一个正确的答案是 [5,4,6,2,null,null,7], 如下图所示。
// 另一个正确答案是 [5,2,6,null,4,null,7]。

// 示例 2:

// 输入: root = [5,3,6,2,4,null,7], key = 0
// 输出: [5,3,6,2,4,null,7]
// 解释: 二叉树不包含值为 0 的节点
// 示例 3:

// 输入: root = [], key = 0
// 输出: []
//

// 提示:

// 节点数的范围 [0, 104].
// -105 <= Node.val <= 105
// 节点值唯一
// root 是合法的二叉搜索树
// -105 <= key <= 105
//

// 进阶： 要求算法时间复杂度为 O(h)，h 为树的高度。

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/delete-node-in-a-bst
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (root === null) return root;
  // 当前节点值比key小，则需要删除当前节点的左子树中key对应的值，并保证二叉搜索树的性质不变
  if (root.val > key) {
    root.left = deleteNode(root.left, key);
    return root;
  }
  // 当前节点值比key大，则需要删除当前节点的右子树中key对应的值，并保证二叉搜索树的性质不变
  else if (root.val < key) {
    root.right = deleteNode(root.right, key);
    return root;
  }
  // 当前节点等于key，则需要删除当前节点，并保证二叉搜索树的性质不变
  else {
    // 当前节点没有左子树
    if (root.left === null) {
      return root.right;
    }
    //当前节点没有右子树
    else if (root.right === null) {
      return root.left;
    }
    // 当前节点既有左子树又有右子树
    else if (root.left !== null && root.right !== null) {
      let node = root.right;
      // 找到当前节点右子树最左边的叶子结点
      while (node.left !== null) {
        node = node.left;
      }
      // 将root的左子树放到root的右子树的最下面的左叶子节点的左子树上
      node.left = root.left;
      return root.right;
    }
  }
};
