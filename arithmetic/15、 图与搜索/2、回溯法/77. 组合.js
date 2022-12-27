// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

// 你可以按 任何顺序 返回答案。

//

// 示例 1：

// 输入：n = 4, k = 2
// 输出：
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]
// 示例 2：

// 输入：n = 1, k = 1
// 输出：[[1]]
//

// 提示：

// 1 <= n <= 20
// 1 <= k <= n

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/combinations
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  function dfs(path, startIndex) {
    if (k === path.length) {
      result.push(path.slice());
      return;
    }
    // i <= n - (k - path.length) + 1 为剪枝
    for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
      path.push(i);
      dfs(path, i + 1);
      path.pop();
    }
  }

  dfs([], 1);
  return result;
};

console.log(combine(4, 2));
