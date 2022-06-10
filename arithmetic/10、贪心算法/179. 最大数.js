// 给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。

// 注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。

//

// 示例 1：

// 输入：nums = [10,2]
// 输出："210"
// 示例 2：

// 输入：nums = [3,30,34,5,9]
// 输出："9534330"
//

// 提示：

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 109

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/largest-number
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  // 比较 ab 与 ba的大小，按降序排列；
  // 再将数组转化为字符串。
  nums.sort((a, b) => {
    const str1 = `${a}${b}`;
    const str2 = `${b}${a}`;
    return str2 - str1;
  });
  return nums[0] ? nums.join("") : "0";
};

console.log(largestNumber([3, 30, 34, 5, 9]));
console.log(largestNumber([10, 2]));
console.log(largestNumber([0, 0]));
