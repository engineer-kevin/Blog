// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

//

// 示例 1：

// 输入：nums = [1,1,2]
// 输出：
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
// 示例 2：

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
//

// 提示：

// 1 <= nums.length <= 8
// -10 <= nums[i] <= 10

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/permutations-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = [];
  const len = nums.length;
  const used = new Array(len).fill(false);
  nums.sort((a, b) => a - b);
  function dfs(path) {
    if (path.length === len) {
      result.push(path.slice());
      return;
    }

    for (let i = 0; i < len; i++) {
      if (used[i] || (i > 0 && nums[i - 1] === nums[i] && !used[i - 1])) {
        continue;
      }
      path.push(nums[i]);
      used[i] = true;
      dfs(path);
      path.pop();
      used[i] = false;
    }
  }
  dfs([]);
  return result;
};

console.log(permuteUnique([1, 1, 2]));
console.log(permuteUnique([1, 2, 3]));
