// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。

//  

// 示例 1：

// 输入：nums = [1,1,1], k = 2
// 输出：2
// 示例 2：

// 输入：nums = [1,2,3], k = 3
// 输出：2
//  

// 提示：

// 1 <= nums.length <= 2 * 104
// -1000 <= nums[i] <= 1000
// -107 <= k <= 107

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/subarray-sum-equals-k
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const map = new Map();
  let count = 0;
  let prefixSum = 0;
  map.set(0, 1);
  for (let num of nums) {
    prefixSum += num;
    if (map.has(prefixSum - k)) {
      count += map.get(prefixSum - k);
    }
    if (map.has(prefixSum)) {
      map.set(prefixSum, map.get(prefixSum) + 1);
    } else {
      map.set(prefixSum, 1);
    }
  }
  return count;
};

console.log(subarraySum([1, -1, 0], 0));