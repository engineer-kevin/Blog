// 给定一个二进制数组 nums , 找到含有相同数量的 0 和 1 的最长连续子数组，并返回该子数组的长度。

//  

// 示例 1:

// 输入: nums = [0,1]
// 输出: 2
// 说明: [0, 1] 是具有相同数量 0 和 1 的最长连续子数组。
// 示例 2:

// 输入: nums = [0,1,0]
// 输出: 2
// 说明: [0, 1] (或 [1, 0]) 是具有相同数量0和1的最长连续子数组。
//  

// 提示：

// 1 <= nums.length <= 105
// nums[i] 不是 0 就是 1

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/contiguous-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  const map = new Map();
  map.set(0, -1);
  const len = nums.length;
  let max = 0;
  let prefixSum = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      prefixSum -= 1;
    } else {
      prefixSum += 1;
    }

    if (map.has(prefixSum)) {
      max = Math.max(i - map.get(prefixSum), max);
    } else {
      map.set(prefixSum, i);
    }
  }
  return max;
};

console.log(findMaxLength([0, 1, 0]));
console.log(findMaxLength([1, 1, 1, 1, 0, 0, 0, 0]));