// 对于一个 正整数，如果它和除了它自身以外的所有 正因子 之和相等，我们称它为 「完美数」。

// 给定一个 整数 n， 如果是完美数，返回 true；否则返回 false。

//  

// 示例 1：

// 输入：num = 28
// 输出：true
// 解释：28 = 1 + 2 + 4 + 7 + 14
// 1, 2, 4, 7, 和 14 是 28 的所有正因子。
// 示例 2：

// 输入：num = 7
// 输出：false
//  

// 提示：

// 1 <= num <= 108

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/perfect-number
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  if (num === 1) return false;
  let res = 1;
  const sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) {
      const digit = num / i;
      res += i + digit;
    }
  }
  return res === num;
};
console.log(checkPerfectNumber(28))