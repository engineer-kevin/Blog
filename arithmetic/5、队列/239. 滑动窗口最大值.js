// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

// 返回 滑动窗口中的最大值 。

//  

// 示例 1：

// 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
// 输出：[3,3,5,5,6,7]
// 解释：
// 滑动窗口的位置                最大值
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// 示例 2：

// 输入：nums = [1], k = 1
// 输出：[1]
//  

// 提示：

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// 1 <= k <= nums.length


// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/sliding-window-maximum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const queue = []; // 单递减的双端队列
  const ans = []; // 最后的返回结果
  for (let i = 0, len = nums.length; i < len; i++) {
    // 当进入滑动窗口的元素大于等于队尾的元素时 不断从队尾出队，
    // 直到进入滑动窗口的元素小于队尾的元素，以保证单调递减的性质
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
      queue.pop();
    }
    queue.push(i); // 元素的索引入队
    if (queue[0] <= i - k) { // 队头元素已经在滑动窗口外了，移除对头元素
      queue.shift();
    }
    if (i >= k - 1) { // 当i大于等于k-1的时候，单调递减队头就是滑动窗口的最大值
      ans.push(nums[queue[0]]);
    }
  }
  return ans;
};
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([6, 5, 4, 3, 2, 1], 3));