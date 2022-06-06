// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

//  

// 示例 1：



// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6
// 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
// 示例 2：

// 输入：height = [4,2,0,3,2,5]
// 输出：9
//  

// 提示：

// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/trapping-rain-water
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} height
 * @return {number}
 */
// 动态规划
// var trap = function (height) {
//   const len = height.length;
//   const leftMax = [];
//   leftMax[0] = height[0];
//   for (let i = 1; i < len; i++) {
//     leftMax[i] = Math.max(leftMax[i - 1], height[i]);
//   }
//   const rightMax = [];
//   rightMax[len - 1] = height[len - 1];
//   for (let i = len - 2; i >= 0; i--) {
//     rightMax[i] = Math.max(rightMax[i + 1], height[i]);
//   }

//   console.log(leftMax, rightMax);

//   let ans = 0;
//   for (let i = 0; i < len; i++) {
//     ans += Math.min(leftMax[i], rightMax[i]) - height[i];
//   }
//   return ans;
// };

// 双指针法
var trap = function (height) {
  const len = height.length;
  let left = 0,
    right = len - 1,
    leftMax = height[0],
    rightMax = height[len - 1];
  let ans = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      leftMax = Math.max(leftMax, height[left]);
      ans += leftMax - height[left];
      left++;
    } else {
      rightMax = Math.max(rightMax, height[right]);
      ans += rightMax - height[right];
      right--;
    }
  }
  return ans;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));
console.log(trap([1]));