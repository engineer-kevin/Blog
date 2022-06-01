// 给你一个整数 n，请你每隔三位添加点（即 "." 符号）作为千位分隔符，并将结果以字符串格式返回。

//

// 示例 1：

// 输入：n = 987
// 输出："987"
// 示例 2：

// 输入：n = 1234
// 输出："1.234"
// 示例 3：

// 输入：n = 123456789
// 输出："123.456.789"
// 示例 4：

// 输入：n = 0
// 输出："0"
//

// 提示：

// 0 <= n < 2^31

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/thousand-separator
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  // 正则解法1 return n.toLocaleString().replace(/,/, '.');
  // 正则解法2 return (n + '').replace(/(?!^)(?=(\d{3})+$)/, '.');
  let count = 0;
  let res = "";
  do {
    count++;
    const cur = n % 10;
    res += cur.toString();
    n = ~~(n / 10); // 向下取整，相当于Math.floor()
    if (count % 3 === 0 && n) {
      res += ".";
    }
  } while (n);
  return res.split("").reverse().join("");
};
console.log(thousandSeparator(123456789));
