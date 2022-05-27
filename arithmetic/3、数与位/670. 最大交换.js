// 给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值。

// 示例 1 :

// 输入: 2736
// 输出: 7236
// 解释: 交换数字2和数字7。
// 示例 2 :

// 输入: 9973
// 输出: 9973
// 解释: 不需要交换。
// 注意:

// 给定数字的范围是 [0, 108]

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/maximum-swap
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  let res = num.toString().split(""); // res -> ['9', '3', '8', '7']
  let maxAns = [];
  const len = res.length;
  let maxIndex = len - 1;
  for (let i = len - 1; i >= 0; i--) {
    if (res[maxIndex] < res[i]) {
      maxAns[i] = i;
      maxIndex = i;
    } else {
      maxAns[i] = maxIndex;
    }
  }
  // maxAns -> [0, 2, 2, 3]
  for (let i = 0; i < len; i++) {
    if (res[i] < res[maxAns[i]]) {
      const temp = res[i];
      res[i] = res[maxAns[i]]
      res[maxAns[i]] = temp;
      break;
    }
  }

  return Number(res.join(""));
};

console.log(maximumSwap(9387));