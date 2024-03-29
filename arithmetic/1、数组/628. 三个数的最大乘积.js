// 给你一个整型数组 nums ，在数组中找出由三个数组成的最大乘积，并输出这个乘积。

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：6
// 示例 2：

// 输入：nums = [1,2,3,4]
// 输出：24
// 示例 3：

// 输入：nums = [-1,-2,-3]
// 输出：-6

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/maximum-product-of-three-numbers
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  const len = nums.length
  nums.sort((a, b) => a - b)
  return Math.max((nums[len - 1] * nums[len - 2] * nums[len - 3]), (nums[0] * nums[1] * nums[len - 1]))
};