// 给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。

// 差值是一个正数，其数值等于两值之差的绝对值。

//

// 示例 1：

// 输入：root = [4,2,6,1,3]
// 输出：1
// 示例 2：

// 输入：root = [1,0,48,null,null,12,49]
// 输出：1
//

// 提示：

// 树中节点的数目范围是 [2, 104]
// 0 <= Node.val <= 105

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/minimum-absolute-difference-in-bst
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/** 中序遍历二叉搜索树是递增的
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let ans = Number.MAX_SAFE_INTEGER;
  let prev = -1; // 记录前一个值
  function inorder(root) {
    if (root === null) return;
    inorder(root.left);
    if (prev === -1) {
      prev = root.val;
    } else {
      ans = Math.min(ans, root.val - prev);
      prev = root.val;
    }
    inorder(root.right);
  }
  inorder(root);
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

console.log(getMinimumDifference(array2binary([4, 2, 6, 1, 3])));
