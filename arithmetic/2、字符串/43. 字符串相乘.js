// 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

// 注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。

// 示例 1:

// 输入: num1 = "2", num2 = "3"
// 输出: "6"
// 示例 2:

// 输入: num1 = "123", num2 = "456"
// 输出: "56088"
//  

// 提示：

// 1 <= num1.length, num2.length <= 200
// num1 和 num2 只能由数字组成。
// num1 和 num2 都不包含任何前导零，除了数字0本身。


// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/multiply-strings
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1.charAt(0) === '0' || num2.charAt(0) === '0') return '0';

  let m = num1.length;
  let n = num2.length;
  const res = new Array(m + n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      const mul = (+num1.charAt(j)) * (+num2.charAt(i));
      console.log(mul);
      const p1 = i + j;
      const p2 = i + j + 1;
      const sum = res[p2] + mul;
      res[p2] = sum % 10;
      res[p1] += Math.floor(sum / 10);
    }
  }
  let i = 0;
  while (i < m + n && res[i] === 0) {
    i++;
  }
  return res.slice(i).join("");
};

console.log(multiply("9",  "9"));