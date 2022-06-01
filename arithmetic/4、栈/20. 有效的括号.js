// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
//  

// 示例 1：

// 输入：s = "()"
// 输出：true
// 示例 2：

// 输入：s = "()[]{}"
// 输出：true
// 示例 3：

// 输入：s = "(]"
// 输出：false
// 示例 4：

// 输入：s = "([)]"
// 输出：false
// 示例 5：

// 输入：s = "{[]}"
// 输出：true
//  

// 提示：

// 1 <= s.length <= 104
// s 仅由括号 '()[]{}' 组成


// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/valid-parentheses
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  for (let symbol of s) {
    if (map[symbol]) {
      stack.push(symbol);
    } else {
      if (symbol !== map[stack.pop()]) return false;
    }
  }
  return stack.length === 0;
};