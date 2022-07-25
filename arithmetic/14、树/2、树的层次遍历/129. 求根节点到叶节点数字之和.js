// 给你一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。
// 每条从根节点到叶节点的路径都代表一个数字：

// 例如，从根节点到叶节点的路径 1 -> 2 -> 3 表示数字 123 。
// 计算从根节点到叶节点生成的 所有数字之和 。

// 叶节点 是指没有子节点的节点。

//  

// 示例 1：


// 输入：root = [1,2,3]
// 输出：25
// 解释：
// 从根到叶子节点路径 1->2 代表数字 12
// 从根到叶子节点路径 1->3 代表数字 13
// 因此，数字总和 = 12 + 13 = 25
// 示例 2：


// 输入：root = [4,9,0,5,1]
// 输出：1026
// 解释：
// 从根到叶子节点路径 4->9->5 代表数字 495
// 从根到叶子节点路径 4->9->1 代表数字 491
// 从根到叶子节点路径 4->0 代表数字 40
// 因此，数字总和 = 495 + 491 + 40 = 1026
//  

// 提示：

// 树中节点的数目在范围 [1, 1000] 内
// 0 <= Node.val <= 9
// 树的深度不超过 10

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/sum-root-to-leaf-numbers
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
var sumNumbers = function (root) {
  // 深度优先搜索
  // function dfs(root, sum) {
  //   if (root === null) return 0;

  //   sum = sum * 10 + root.val;
  //   if (root.left === null && root.right === null) {
  //     return sum;
  //   }
  //   const left = dfs(root.left, sum);
  //   const right = dfs(root.right, sum);
  //   return left + right;
  // }

  // return dfs(root, 0);

  // 广度优先搜索
  let sum = 0;
  const nodeQueue = [];
  const valQueue = [];
  nodeQueue.push(root);
  valQueue.push(root.val);
  while (nodeQueue.length) {
    const node = nodeQueue.shift();
    const val = valQueue.shift();
    const left = node.left;
    const right = node.right;
    if (left === null && right === null) {
      sum += val;
    } else {
      if (left) {
        nodeQueue.push(left);
        valQueue.push(val * 10 + left.val);
      }

      if (right) {
        nodeQueue.push(right);
        valQueue.push(val * 10 + right.val);
      }
    }
  }
  return sum;
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

console.log(sumNumbers(array2binary([4, 9, 0, 5, 1])));