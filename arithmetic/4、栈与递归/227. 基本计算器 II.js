// 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。

// 整数除法仅保留整数部分。

// 你可以假设给定的表达式总是有效的。所有中间结果将在 [-231, 231 - 1] 的范围内。

// 注意：不允许使用任何将字符串作为数学表达式计算的内置函数，比如 eval() 。

//  

// 示例 1：

// 输入：s = "3+2*2"
// 输出：7
// 示例 2：

// 输入：s = " 3/2 "
// 输出：1
// 示例 3：

// 输入：s = " 3+5 / 2 "
// 输出：5
//  

// 提示：

// 1 <= s.length <= 3 * 105
// s 由整数和算符 ('+', '-', '*', '/') 组成，中间由一些空格隔开
// s 表示一个 有效表达式
// 表达式中的所有整数都是非负整数，且在范围 [0, 231 - 1] 内
// 题目数据保证答案是一个 32-bit 整数

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/basic-calculator-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const stack = [];
  let num = 0;
  let prevSign = '+';
  s = s + '+'
  const len = s.length;
  for (let i = 0; i < len; i++) {
    if (s[i] >= '0' && s[i] <= '9') {
      num = num * 10 + s[i].charCodeAt(0) - '0'.charCodeAt(0);
    } else if (s[i] !== ' ') {
      switch(prevSign) {
        case '+':
          stack.push(num);
          break;
        case '-':
          stack.push(-num);
          break;
        case '*':
          stack.push(stack.pop() * num);
          break;
        default:
          stack.push((stack.pop() / num) | 0);
      }
      num = 0;
      prevSign = s[i];
    }
  }
  let res = 0;
  while (stack.length) {
    res += stack.pop();
  }
  return res;
};

console.log(calculate(" 3+5 / 2 "));