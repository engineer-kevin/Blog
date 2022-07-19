// 给定一个二叉树，找出其最小深度。

// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

// 说明：叶子节点是指没有子节点的节点。

//  

// 示例 1：


// 输入：root = [3,9,20,null,null,15,7]
// 输出：2
// 示例 2：

// 输入：root = [2,null,3,null,4,null,5,null,6]
// 输出：5
//  

// 提示：

// 树中节点数的范围在 [0, 105] 内
// -1000 <= Node.val <= 1000

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/minimum-depth-of-binary-tree
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
var minDepth = function (root) {
  // 迭代实现
  // if (root === null) return 0;
  // const queue = [root];
  // let depth = 1;
  // while (queue.length) {
  //   let size = queue.length;
  //   while (size > 0) {
  //     const node = queue.shift();
  //     if (node.left === null && node.right === null) return depth;
      
  //     if (node.left) {
  //       queue.push(node.left);
  //     }

  //     if (node.right) {
  //       queue.push(node.right);
  //     }
  //     size--;
  //   }
  //   depth++;
  // }
  // return depth;

  // 递归实现
  if (root === null) return 0;
  const left = minDepth(root.left);
  const right = minDepth(root.right);
  return root.left === null || root.right === null ? left + right + 1 : Math.min(left, right) + 1;
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

console.log(minDepth(array2binary([3, 9, 20, null, null, 15, 7])));