// 给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

// candidates 中的每个数字在每个组合中只能使用 一次 。

// 注意：解集不能包含重复的组合。

//

// 示例 1:

// 输入: candidates = [10,1,2,7,6,1,5], target = 8,
// 输出:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
// 示例 2:

// 输入: candidates = [2,5,2,1,2], target = 5,
// 输出:
// [
// [1,2,2],
// [5]
// ]
//

// 提示:

// 1 <= candidates.length <= 100
// 1 <= candidates[i] <= 50
// 1 <= target <= 30

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/combination-sum-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = [];
  const len = candidates.length;
  candidates.sort((a, b) => a - b);
  function dfs(path, sum, startIndex) {
    if (sum >= target) {
      if (sum === target) {
        result.push(path.slice());
      }
      return;
    }

    for (let i = startIndex; i < len; i++) {
      const val = candidates[i];
      // i - startIndex > 0表示从startIndex开始，i比startIndex要大
      if (i - startIndex > 0 && candidates[i] === candidates[i - 1]) continue;
      path.push(val);
      dfs(path, sum + val, i + 1);
      path.pop();
    }
  }
  dfs([], 0, 0);
  return result;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([2, 5, 2, 1, 2], 5));
