// 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。

// 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
// 示例 1：

// 输入：nums = [1,2,0]
// 输出：3
// 示例 2：

// 输入：nums = [3,4,-1,1]
// 输出：2
// 示例 3：

// 输入：nums = [7,8,9,11,12]
// 输出：1

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/first-missing-positive
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    while (nums[i] > 0 && nums[i] <= len && nums[i] !== nums[nums[i] - 1]) {
      swap(nums, i, nums[i] - 1)
    }
  }

  for (let j = 0; j < len; j++) {
    if (nums[j] !== j + 1) return j + 1
  }
  return len + 1 // 都正确返回数组长度 + 1
};

function swap (nums, i, j) {
  let temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}

console.log(firstMissingPositive([3,4,-1,1]))