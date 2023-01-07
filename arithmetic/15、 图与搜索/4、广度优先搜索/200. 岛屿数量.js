// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

// 此外，你可以假设该网格的四条边均被水包围。

//

// 示例 1：

// 输入：grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// 输出：1
// 示例 2：

// 输入：grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// 输出：3
//

// 提示：

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] 的值为 '0' 或 '1'

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/number-of-islands
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // // 深度优先搜索实现
  // function dfs(grid, i, j) {
  //   // 判断越界或者当前节点为0
  //   if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === "0") return;

  //   grid[i][j] = "0";
  //   dfs(grid, i - 1, j); // 上
  //   dfs(grid, i, j + 1); // 右
  //   dfs(grid, i + 1, j); // 下
  //   dfs(grid, i, j - 1); // 左
  // }

  // let res = 0;
  // const grid.length = grid.length;
  // const grid[0].length = grid[0].length;

  // for (let i = 0; i < grid.length; i++) {
  //   for (let j = 0; j < grid[0].length; j++) {
  //     // 遇到"1",岛屿数量加1
  //     if (grid[i][j] === "1") {
  //       ++res;
  //       dfs(grid, i, j);
  //     }
  //   }
  // }

  // return res;

  // 广度优先搜索实现
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        ++count;
        grid[i][j] = "0"; // 做标记，避免重复遍历
        const queue = [];
        queue.push([i, j]);
        bfs(queue, grid);
      }
    }
  }

  return count;
};

function bfs(queue, grid) {
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]; // 上、右、下、左
  while (queue.length) {
    const cur = queue.shift();
    for (let dir of dirs) {
      const i = cur[0] + dir[0];
      const j = cur[1] + dir[1];
      if (
        i < 0 ||
        i >= grid.length ||
        j < 0 ||
        j >= grid[0].length ||
        grid[i][j] === "0"
      ) {
        continue;
      }

      grid[i][j] = "0";
      queue.push([i, j]);
    }
  }
}

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);

console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);
