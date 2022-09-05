// 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。

// 叶子节点 是指没有子节点的节点。

//  
// 示例 1：


// 输入：root = [1,2,3,null,5]
// 输出：["1->2->5","1->3"]
// 示例 2：

// 输入：root = [1]
// 输出：["1"]
//  

// 提示：

// 树中节点的数目在范围 [1, 100] 内
// -100 <= Node.val <= 100

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/binary-tree-paths
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  // 深度优先搜索
  // const paths = [];

  // function dfs (root, path) {
  //   if (root) {
  //     path += root.val;
  //     if (root.left === null && root.right === null) {
  //       paths.push(path);
  //     } else {
  //       path += '->';
  //       dfs(root.left, path);
  //       dfs(root.right, path);
  //     }
  //   }
  // }

  // dfs(root, '');
  // return paths;

  // 广度优化搜索
  const paths = [];
  if (root === null) return [];
  const node_queue = [root];
  const path_queue = [String(root.val)];
  while (node_queue.length) {
    const node = node_queue.shift();
    const path = path_queue.shift();
    if (node.left === null && node.right === null) {
      paths.push(path);
    } else {
      if (node.left) {
        node_queue.push(node.left);
        path_queue.push(path + '->' + String(node.left.val));
      }

      if (node.right) {
        node_queue.push(node.right);
        path_queue.push(path + '->' + String(node.right.val));
      }
    }
  }

  return paths;
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

console.log(binaryTreePaths(array2binary([1, 2, 3, null, 5])));