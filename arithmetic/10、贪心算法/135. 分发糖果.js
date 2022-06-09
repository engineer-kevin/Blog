// n 个孩子站成一排。给你一个整数数组 ratings 表示每个孩子的评分。

// 你需要按照以下要求，给这些孩子分发糖果：

// 每个孩子至少分配到 1 个糖果。
// 相邻两个孩子评分更高的孩子会获得更多的糖果。
// 请你给每个孩子分发糖果，计算并返回需要准备的 最少糖果数目 。

//  

// 示例 1：

// 输入：ratings = [1,0,2]
// 输出：5
// 解释：你可以分别给第一个、第二个、第三个孩子分发 2、1、2 颗糖果。
// 示例 2：

// 输入：ratings = [1,2,2]
// 输出：4
// 解释：你可以分别给第一个、第二个、第三个孩子分发 1、2、1 颗糖果。
//      第三个孩子只得到 1 颗糖果，这满足题面中的两个条件。
//  

// 提示：

// n == ratings.length
// 1 <= n <= 2 * 104
// 0 <= ratings[i] <= 2 * 104


// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/candy
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const len = ratings.length;
  // 左规则(从前往后遍历)
  const left = new Array(len).fill(1);
  for (let i = 1; i < len; i++) {
    if (ratings[i] > ratings[i - 1]) {
      left[i] = left[i - 1] + 1;
    }
  }
  // 右规则(从后往前遍历)
  const right = new Array(len).fill(1);
  let minCandy = left[len - 1];
  for (let i = len - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      right[i] = right[i + 1] + 1;
    }
    // 取得对应左规则数组的最大值，将最大值累加就是最终的答案
    minCandy += Math.max(left[i], right[i]);
  }
  
  return minCandy;
};

console.log(candy([1, 0, 2]));
console.log(candy([1, 2, 2]));
console.log(candy([2]));