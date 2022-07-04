// 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。

//

// 示例 1：

// 输入：root = [4,2,7,1,3,6,9]
// 输出：[4,7,2,9,6,3,1]
// 示例 2：

// 输入：root = [2,1,3]
// 输出：[2,3,1]
// 示例 3：

// 输入：root = []
// 输出：[]
//

// 提示：

// 树中节点数目范围在 [0, 100] 内
// -100 <= Node.val <= 100

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/invert-binary-tree
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // 递归实现
  // if (root === null) {
  //   return null;
  // }
  // const left = invertTree(root.left);
  // const right = invertTree(root.right);
  // root.left = right;
  // root.right = left;
  // return root;
  
  // 迭代实现
  if (root === null) {
    return null;
  }

  const queue = [root]; // root先入队
  while (queue.length) {
    const node = queue.shift(); // 出队
    // 交互
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
    // 左右子树节点入队
    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return root;
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

console.log(invertTree(array2binary([4, 2, 7, 1, 3, 6, 9])));
console.log(invertTree(array2binary([2, 1, 3])));
console.log(invertTree(array2binary([])));