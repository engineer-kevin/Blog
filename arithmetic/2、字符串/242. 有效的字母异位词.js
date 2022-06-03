// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

// 示例 1:

// 输入: s = "anagram", t = "nagaram"
// 输出: true
// 示例 2:

// 输入: s = "rat", t = "car"
// 输出: false
//  

// 提示:

// 1 <= s.length, t.length <= 5 * 104
// s 和 t 仅包含小写字母
//  

// 进阶: 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/valid-anagram
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let sLen = s.length,
    tLen = t.length;
  if (sLen !== tLen) return false;
  const nums = new Array(26).fill(0);
  for (let i = 0; i < sLen; i++) {
    nums[s.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < sLen; i++) {
    if (nums[t.charCodeAt(i) - 97] === 0) return false
    nums[t.charCodeAt(i) - 97]--;
  }
  return true;
};
console.log(isAnagram("anagram","nagaram"));