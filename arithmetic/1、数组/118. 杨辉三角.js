// 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

// 在「杨辉三角」中，每个数是它左上方和右上方的数的和。

// 示例 1:

// 输入: numRows = 5
// 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// 示例 2:

// 输入: numRows = 1
// 输出: [[1]]
//  

// 提示:

// 1 <= numRows <= 30

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/pascals-triangle
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  // let res = []
  // let prev
  // for (let i = 0; i < numRows; i++) {
  //   let curr = []
  //   for (let j = 0; j <= i; j++) {
  //     if (j === 0 || j === i) {
  //       curr[j] = 1
  //     } else {
  //       curr[j] = prev[j - 1] + prev[j]
  //     }
  //   }
  //   prev = curr
  //   res.push(curr)
  // }
  // return res
  let res = []
  for (let i = 0; i < numRows; i++) { // 遍历行
    const row = new Array(i + 1).fill(1) // 初始化行
    for (let j = 1; j <= i - 1; j++) { // 遍历列
      row[j] = res[i - 1][j - 1] + res[i - 1][j]
    }
    res.push(row)
  }
  return res
};

console.log(generate(5))