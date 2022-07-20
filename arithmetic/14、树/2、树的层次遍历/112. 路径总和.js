// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。

// 叶子节点 是指没有子节点的节点。

//  

// 示例 1：


// 输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// 输出：true
// 解释：等于目标和的根节点到叶节点路径如上图所示。
// 示例 2：


// 输入：root = [1,2,3], targetSum = 5
// 输出：false
// 解释：树中存在两条根节点到叶子节点的路径：
// (1 --> 2): 和为 3
// (1 --> 3): 和为 4
// 不存在 sum = 5 的根节点到叶子节点的路径。
// 示例 3：

// 输入：root = [], targetSum = 0
// 输出：false
// 解释：由于树是空的，所以不存在根节点到叶子节点的路径。
//  

// 提示：

// 树中节点的数目在范围 [0, 5000] 内
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/path-sum
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  // 迭代实现
  // if (root === null) return false;
  // const nodeQueue = [root];
  // const valQueue = [root.val];
  // while (nodeQueue.length) {
  //   const node = nodeQueue.shift();
  //   const val = valQueue.shift();
  //   if (node.left === null && node.right === null) {
  //     if (val === targetSum) return true;
  //   }
  //   if (node.left) {
  //     nodeQueue.push(node.left);
  //     valQueue.push(val + node.left.val);
  //   }
  //   if (node.right) {
  //     nodeQueue.push(node.right);
  //     valQueue.push(val + node.right.val);
  //   }
  // }
  // return false;

  // 递归实现
  if (root === null) return false;
  if (root.left === null && root.right === null) { // 叶子节点
    return targetSum === root.val;
  }

  const remain = targetSum - root.val;
  return hasPathSum(root.left, remain) || hasPathSum(root.right, remain);
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

console.log(hasPathSum(array2binary([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]), 22));
console.log(hasPathSum(array2binary([1, 2, 3]), 5));