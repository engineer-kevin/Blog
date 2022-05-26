// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 示例 1：

// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
// 示例 2：

// 输入：nums = []
// 输出：[]
// 示例 3：

// 输入：nums = [0]
// 输出：[]

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/3sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const len = nums.length
  let res = []
  if (len < 3) return res

  nums.sort((a, b) => a - b) // 排序
  for (let i = 0; i < len; i++) {
    if(nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
    if (i > 0 && nums[i] === nums[i - 1]) continue // 去重

    let l = i + 1, r = len - 1
    
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r]
      if (sum > 0) {
        r--
      } else if (sum < 0) {
        l++
      } else {
        
        res.push([nums[i], nums[l], nums[r]])
        while (l < r && nums[l] === nums[l + 1]) l++
        while (l < r && nums[r] === nums[r - 1]) r-- 
        l++
        r--
      }
    }
  }
  return res
};

console.log(threeSum([1,-1,-1,0]));