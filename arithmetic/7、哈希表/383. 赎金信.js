// 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。

// 如果可以，返回 true ；否则返回 false 。

// magazine 中的每个字符只能在 ransomNote 中使用一次。

//  

// 示例 1：

// 输入：ransomNote = "a", magazine = "b"
// 输出：false
// 示例 2：

// 输入：ransomNote = "aa", magazine = "ab"
// 输出：false
// 示例 3：

// 输入：ransomNote = "aa", magazine = "aab"
// 输出：true
//  

// 提示：

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote 和 magazine 由小写英文字母组成

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/ransom-note
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  // map解法
  // const map = new Map();
  // for (let char of magazine) {
  //   if (map.has(char)) {
  //     map.set(char, map.get(char) + 1);
  //   } else {
  //     map.set(char, 1);
  //   }
  // }
  // for (let char of ransomNote) {
  //   const val = map.get(char);
  //   if (val) { // val不为空，且大于0
  //     map.set(char, val - 1);
  //   } else {
  //     return false;
  //   }
  // }
  // return true;

  // 数组解法
  const res = new Array(26).fill(0);
  for (let str of magazine) {
    res[str.charCodeAt(0) - 97]++;
  }
  for (let str of ransomNote) {
    if (!res[str.charCodeAt(0) - 97]) return false;
    res[str.charCodeAt(0) - 97]--;
  }
  return true;
};
console.log(canConstruct("aa", "aab"));
console.log(canConstruct("aa", "ab"));