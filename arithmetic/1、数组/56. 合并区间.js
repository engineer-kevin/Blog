// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

// 示例 1：

// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
// 示例 2：

// 输入：intervals = [[1,4],[4,5]]
// 输出：[[1,5]]
// 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/merge-intervals
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  let res = []
  let len = intervals.length
  intervals.sort((a, b) => a[0] - b[0])
  let prev = intervals[0]
  for (let i = 1; i < len; i++) {
    const curr = intervals[i]
    if (prev[1] >= curr[0]) { // 有重合
      prev[1] = Math.max(prev[1], curr[1])
    } else {
      res.push(prev)
      prev = curr
    }
  }
  res.push(prev)
  return res
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));