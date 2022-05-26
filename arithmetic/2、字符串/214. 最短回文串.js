// 给定一个字符串 s，你可以通过在字符串前面添加字符将其转换为回文串。找到并返回可以用这种方式转换的最短回文串。

// 示例 1：

// 输入：s = "aacecaaa"
// 输出："aaacecaaa"
// 示例 2：

// 输入：s = "abcd"
// 输出："dcbabcd"
//  

// 提示：

// 0 <= s.length <= 5 * 104
// s 仅由小写英文字母组成


// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/shortest-palindrome
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {string} s
 * @return {string}
 */
 var shortestPalindrome = function(s) {
  let i = s.length - 1;
  const res = [];
  while (i > 0 && !isPalindrome(s.substring(0, i + 1))) {
      res.push(s[i]);
      i--;
  }
  
  let ans = s;
  while (res.length) {
      const currStr = res.pop();
      console.log(currStr,res)
      ans = currStr + ans
  }
  return ans;
};

function isPalindrome (s) {
  let statr = 0, end = s.length - 1;
  while (statr < end) {
      if (s[statr] !== s[end]) return false;
      statr++;
      end--;
  }
  return true
}

console.log(shortestPalindrome('abcd'))