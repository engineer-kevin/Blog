// 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

//  

// 示例 1：

// 输入：nums = [3,2,3]
// 输出：3
// 示例 2：

// 输入：nums = [2,2,1,1,1,2,2]
// 输出：2
//  

// 提示：
// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
//  

// 进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/majority-element
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  // // 哈希表法
  // const map = new Map();
  // for (let num of nums) {
  //   if (map.has(num)) {
  //     map.set(num, map.get(num) + 1);
  //   } else {
  //     map.set(num, 1);
  //   }
  // }
  
  // for (let num of nums) {
  //   if (map.get(num) > nums.length / 2) {
  //     return num;
  //   }
  // }

  // // 排序法
  // nums.sort((a, b) => a - b);
  // return nums[Math.ceil(nums.length / 2) - 1];

  // 摩尔投票法
  let count = 1;
  let candidate = nums[0];
  for (let i = 1, len = nums.length; i < len; i++) {
    if (candidate === nums[i]) {
      ++count;
    } else {
      if (count === 0) {
        candidate = nums[i];
        count = 1;
      } else {
        --count;
      }
    }
  }
  return candidate;
};
console.log(majorityElement([3,3,4]));
console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));