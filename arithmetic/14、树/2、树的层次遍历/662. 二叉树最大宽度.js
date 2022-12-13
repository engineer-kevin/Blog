// 给你一棵二叉树的根节点 root ，返回树的 最大宽度 。

// 树的 最大宽度 是所有层中最大的 宽度 。

// 每一层的 宽度 被定义为该层最左和最右的非空节点（即，两个端点）之间的长度。将这个二叉树视作与满二叉树结构相同，两端点间会出现一些延伸到这一层的 null 节点，这些 null 节点也计入长度。

// 题目数据保证答案将会在  32 位 带符号整数范围内。

//

// 示例 1：

// 输入：root = [1,3,2,5,3,null,9]
// 输出：4
// 解释：最大宽度出现在树的第 3 层，宽度为 4 (5,3,null,9) 。
// 示例 2：

// 输入：root = [1,3,2,5,null,null,9,6,null,7]
// 输出：7
// 解释：最大宽度出现在树的第 4 层，宽度为 7 (6,null,null,null,null,null,7) 。
// 示例 3：

// 输入：root = [1,3,2,5]
// 输出：2
// 解释：最大宽度出现在树的第 2 层，宽度为 2 (3,2) 。
//

// 提示：

// 树中节点的数目范围是 [1, 3000]
// -100 <= Node.val <= 100

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/maximum-width-of-binary-tree
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
var widthOfBinaryTree = function (root) {
  let max = 1n;
  const queue = [root];
  root.val = 1n;
  while (queue.length) {
    let len = queue.length;
    while (len--) {
      const node = queue.shift();
      const val = node.val;
      if (node.left) {
        node.left.val = 2n * val;
        queue.push(node.left);
      }
      if (node.right) {
        node.right.val = 2n * val + 1n;
        queue.push(node.right);
      }
    }

    if (queue.length) {
      const curr = queue[queue.length - 1].val - queue[0].val + 1n;
      max = curr > max ? curr : max;
    }
  }

  return max;
};
