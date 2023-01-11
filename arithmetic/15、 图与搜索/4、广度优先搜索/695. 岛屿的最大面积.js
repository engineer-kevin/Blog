// 给你一个大小为 m x n 的二进制矩阵 grid 。

// 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在 水平或者竖直的四个方向上 相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。

// 岛屿的面积是岛上值为 1 的单元格的数目。

// 计算并返回 grid 中最大的岛屿面积。如果没有岛屿，则返回面积为 0 。

//

// 示例 1：

// 输入：grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// 输出：6
// 解释：答案不应该是 11 ，因为岛屿只能包含水平或垂直这四个方向上的 1 。
// 示例 2：

// 输入：grid = [[0,0,0,0,0,0,0,0]]
// 输出：0
//

// 提示：

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 50
// grid[i][j] 为 0 或 1

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/max-area-of-island
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  // 深度优先搜索实现

  let res = 0;
  const row = grid.length;
  const col = grid[0].length;

  function dfs(grid, i, j) {
    let area = 0;
    if (i < 0 || i >= row || j < 0 || j >= col || grid[i][j] === 0) return 0;
    grid[i][j] = 0;
    ++area;
    const dirs = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];
    for (let [x, y] of dirs) {
      area += dfs(grid, x + i, y + j);
    }
    return area;
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        res = Math.max(res, dfs(grid, i, j));
      }
    }
  }

  return res;
  //  // 广度优先搜索实现
  //   let res = 0;
  //   const row = grid.length;
  //   const col = grid[0].length;
  //   for (let i = 0; i < row; i++) {
  //     for (let j = 0; j < col; j++) {
  //       if (grid[i][j] === 1) {
  //         const queue = [[i, j]];
  //         const dirs = [
  //           [-1, 0],
  //           [0, 1],
  //           [1, 0],
  //           [0, -1],
  //         ];
  //         let area = 0;
  //         while (queue.length) {
  //           const [x, y] = queue.shift();
  //           if (x < 0 || x >= row || y < 0 || y >= col || grid[x][y] === 0)
  //             continue;
  //           area++;
  //           grid[x][y] = 0;
  //           for (let [r, c] of dirs) {
  //             const xr = x + r;
  //             const yc = y + c;
  //             queue.push([xr, yc]);
  //           }
  //         }
  //         res = Math.max(res, area);
  //       }
  //     }
  //   }
  //   return res;
};

const grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

const grid1 = [
  [0, 1],
  [1, 1],
];

console.log(maxAreaOfIsland(grid));
console.log(maxAreaOfIsland(grid1));
