// 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

// 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
// 给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。

//

// 示例 1：

// 输入：s = "25525511135"
// 输出：["255.255.11.135","255.255.111.35"]
// 示例 2：

// 输入：s = "0000"
// 输出：["0.0.0.0"]
// 示例 3：

// 输入：s = "101023"
// 输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
//

// 提示：

// 1 <= s.length <= 20
// s 仅由数字组成

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/restore-ip-addresses
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const result = [];
  const len = s.length;
  function dfs(path, startIndex) {
    if (path.length === 4) {
      // 片段满4段,不用往下选了
      if (startIndex === len) {
        // 耗尽所有字符
        result.push(path.join(".")); // 拼成字符串，加入解集
      }
      return;
    }

    for (let i = startIndex; i < len; i++) {
      const str = s.slice(startIndex, i + 1);
      if (str.length > 3) break; // 长度大于3
      if (str.length > 1 && str[0] === "0") break; // 含有前导 0，无效
      if (+str > 255) break; // 大于255
      path.push(str);
      dfs(path, i + 1);
      path.pop();
    }
  }

  dfs([], 0);
  return result;
};

console.log(restoreIpAddresses("25525511135"));
console.log(restoreIpAddresses("0000"));
console.log(restoreIpAddresses("101023"));
