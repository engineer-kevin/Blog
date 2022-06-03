// 给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。

// 示例 1：

// 输入: s = "leetcode"
// 输出: 0
// 示例 2:

// 输入: s = "loveleetcode"
// 输出: 2
// 示例 3:

// 输入: s = "aabb"
// 输出: -1
//  

// 提示:

// 1 <= s.length <= 105
// s 只包含小写字母

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/first-unique-character-in-a-string
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const map = new Map();
  const len = s.length;
  for (let i = 0; i < len; i++) {
    const key = s.charAt(i);
    if (map.has(key)) {
      map.set(key, map.get(key) + 1);
    } else {
      map.set(key, 1);
    }
  }
  for (let i = 0; i < len; i++) {
    const str = s.charAt(i);
    if (map.get(str) === 1) return i;
  }
  return -1;
};

console.log(firstUniqChar('loveleetcode'));