// 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

//  

// 示例 1:

// 输入: s = "aba"
// 输出: true
// 示例 2:

// 输入: s = "abca"
// 输出: true
// 解释: 你可以删除c字符。
// 示例 3:

// 输入: s = "abc"
// 输出: false
//  

// 提示:

// 1 <= s.length <= 105
// s 由小写英文字母组成

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/valid-palindrome-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let left = 0, right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
    }
    left++;
    right--;
  }
  return true;
};

function isPalindrome (s, l, r) {
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }
  return true;
}

console.log(validPalindrome("abc"))
console.log(validPalindrome("abca"))