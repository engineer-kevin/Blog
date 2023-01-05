// 给你一个正整数 n ，请你找出符合条件的最小整数，其由重新排列 n 中存在的每位数字组成，并且其值大于 n 。如果不存在这样的正整数，则返回 -1 。

// 注意 ，返回的整数应当是一个 32 位整数 ，如果存在满足题意的答案，但不是 32 位整数 ，同样返回 -1 。

//

// 示例 1：

// 输入：n = 12
// 输出：21
// 示例 2：

// 输入：n = 21
// 输出：-1
//

// 提示：

// 1 <= n <= 231 - 1

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/next-greater-element-iii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
  const max = 2 ** 31 - 1; // Math.pow(2, 31) - 1
  const nums = String(n).split("");
  const len = nums.length;
  let i = len - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i < 0) return -1;

  let j = len - 1;
  while (j >= 0 && nums[j] <= nums[i]) {
    j--;
  }
  swap(nums, i, j);

  let l = i + 1;
  let r = len - 1;
  while (l < r) {
    swap(nums, l, r);
    l++;
    r--;
  }
  const res = Number(nums.join(""));
  return res > max ? -1 : res;
};

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

console.log(nextGreaterElement(12222333));
