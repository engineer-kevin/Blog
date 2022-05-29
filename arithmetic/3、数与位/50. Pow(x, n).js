// 实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn ）。

//  

// 示例 1：

// 输入：x = 2.00000, n = 10
// 输出：1024.00000
// 示例 2：

// 输入：x = 2.10000, n = 3
// 输出：9.26100
// 示例 3：

// 输入：x = 2.00000, n = -2
// 输出：0.25000
// 解释：2-2 = 1/22 = 1/4 = 0.25
//  

// 提示：

// -100.0 < x < 100.0
// -231 <= n <= 231-1
// -104 <= xn <= 104


// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/powx-n
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let res = 1;
  while (n > 0) {
    if (n & 1 === 1) { // n & 1: n对2取模 -> n % 2，x为奇数
      res = res * x;
    }
    x = x * x;
    n = n >>> 1; // 无符号右移n >>> 1：n / 2向下取整 -> Math.floor(n / 2)
  }
  return res;
};

console.log(myPow(0, 8));