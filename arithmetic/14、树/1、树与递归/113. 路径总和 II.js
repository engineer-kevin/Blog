// 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

// 叶子节点 是指没有子节点的节点。

//  

// 示例 1：


// 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// 输出：[[5,4,11,2],[5,8,4,5]]
// 示例 2：


// 输入：root = [1,2,3], targetSum = 5
// 输出：[]
// 示例 3：

// 输入：root = [1,2], targetSum = 0
// 输出：[]
//  

// 提示：

// 树中节点总数在范围 [0, 5000] 内
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/path-sum-ii
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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  // 递归实现
  // const res = [];
  // const path = [];

  // function dfs(root, targetSum) {
  //   if (root === null) return;
  //   const left = root.left;
  //   const right = root.right;
  //   const val = root.val;
  //   const remian = targetSum - val;

  //   path.push(val); // 把当前节点值加入到path中

  //   if (left === null && right === null) { // 叶子节点
  //     if (remian === 0) { // sum等于叶子节点的值
  //       res.push(path.slice()); // 要把它放到res中(引用类型，要做浅拷贝)
  //     }
  //   }

  //   dfs(left, remian);
  //   dfs(right, remian);
  //   path.pop(); // 回溯
  // }

  // dfs(root, targetSum);
  // return res;
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

console.log(pathSum(array2binary([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 22));