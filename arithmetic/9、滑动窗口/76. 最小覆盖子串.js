// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

//

// 注意：

// 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
// 如果 s 中存在这样的子串，我们保证它是唯一的答案。
//

// 示例 1：

// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC"
// 示例 2：

// 输入：s = "a", t = "a"
// 输出："a"
// 示例 3:

// 输入: s = "a", t = "aa"
// 输出: ""
// 解释: t 中两个字符 'a' 均应包含在 s 的子串中，
// 因此没有符合条件的子字符串，返回空字符串。
//

// 提示：

// 1 <= s.length, t.length <= 105
// s 和 t 由英文字母组成

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/minimum-window-substring
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const need = {};
  const sLen = s.length;
  let needCnt = t.length;
  let left = 0;
  let right = 0;
  let start = 0;
  let distance = sLen + 1;
  for (let char of t) {
    // 记录所需要的字符个数
    // need = {A:1,B:1,C:1}
    need[char] = need[char] === undefined ? 1 : ++need[char];
  }

  while (right < sLen) {
    if (need[s[right]] && need[s[right]] > 0) { // 说明该字符我们需要
      needCnt--;
    }
    // 这里将right遍历的字符都加入到了窗口中,如果是无关的字符会变成负数
    // 如果是需要的字符就会减一,出现多余的也会变成负数
    need[s[right]] = need[s[right]] === undefined ? -1 : need[s[right]] - 1;
    if (needCnt === 0) { // 说明区间已经拿到了所有需要的字符
      // 这里有两种情况,一种是区间不需要的字符,还有一种是重复的需要字符
      // 去掉不需要的字符和重复的需要字符的字符,缩小区间
      while (need[s[left]] < 0) {
        need[s[left]]++;
        left++;
      }

      if (right - left + 1 < distance) {
        distance = right - left + 1;
        start = left;
      }
      // 将左边界右移,由于减少了一位需要的字符,所以都要加1
      need[s[left]]++;
      left++;
      needCnt++;
    }
    // 右边界右移
    right++;
  }
  return distance === sLen + 1 ? "" : s.substring(start, start + distance);
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("a", "a"));
console.log(minWindow("a", "aa"));
