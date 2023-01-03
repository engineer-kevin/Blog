// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

//

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// 示例 2：

// 输入：nums = [0,1]
// 输出：[[0,1],[1,0]]
// 示例 3：

// 输入：nums = [1]
// 输出：[[1]]
//

// 提示：

// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// nums 中的所有整数 互不相同

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/permutations
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];
  const use = {};
  const len = nums.length;
  function dfs(path) {
    if (path.length === len) {
      // 递归结束条件
      result.push(path.slice());
      return;
    }

    for (let i = 0; i < len; i++) {
      if (use[i]) continue; // 剪枝
      path.push(nums[i]);
      use[i] = true;
      dfs(path);
      path.pop();
      use[i] = false;
    }
  }
  dfs([]);
  return result;
};

console.log(permute([1, 2, 3]));
console.log(permute([0, 1]));
