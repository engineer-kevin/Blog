// 给定一个 row x col 的二维网格地图 grid ，其中：grid[i][j] = 1 表示陆地， grid[i][j] = 0 表示水域。

// 网格中的格子 水平和垂直 方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。

// 岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。

//

// 示例 1：

// 输入：grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// 输出：16
// 解释：它的周长是上面图片中的 16 个黄色的边
// 示例 2：

// 输入：grid = [[1]]
// 输出：4
// 示例 3：

// 输入：grid = [[1,0]]
// 输出：4
//

// 提示：

// row == grid.length
// col == grid[i].length
// 1 <= row, col <= 100
// grid[i][j] 为 0 或 1

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/island-perimeter
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  // 深度优先遍历
  const row = grid.length;
  const col = grid[0].length;
  function dfs(grid, i, j) {
    if (i < 0 || i >= row || j < 0 || j >= col) return 1; // 当前正好越界，说明穿过了一个边界，周长+1
    if (grid[i][j] === 0) return 1; // 从土地来到了海水，说明穿过了一个边界，周长+1
    if (grid[i][j] === 2) return 0; // 之前访问过，直接返回，返回0，无周长收益
    grid[i][j] = 2; // 到此，当前点为1，将它改为2，代表已访问
    const dirs = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];
    let count = 0;
    for (let [x, y] of dirs) {
      // 继续往四个方向“扩散”，目标是遇到边界和海水，答案随着递归出栈向上返回，得出大的答案
      count += dfs(grid, x + i, j + y);
    }
    return count;
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        return dfs(grid, i, j);
      }
    }
  }

  return 0;

  // // 广度优先遍历
  // let res = 0;
  // const row = grid.length;
  // const col = grid[0].length;
  // for (let i = 0; i < row; i++) {
  //   for (let j = 0; j < col; j++) {
  //     if (grid[i][j] === 1) {
  //       const dirs = [
  //         [-1, 0],
  //         [0, 1],
  //         [1, 0],
  //         [0, -1],
  //       ];
  //       let count = 4;
  //       for (let [r, c] of dirs) {
  //         // 每个岛屿四周相邻几个岛屿就减去几个岛屿
  //         const x = i + r;
  //         const y = j + c;
  //         if (x < 0 || x >= row || y < 0 || y >= col || grid[x][y] === 0)
  //           continue;
  //         --count;
  //       }
  //       res += count;
  //     }
  //   }
  // }

  // return res;
};

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);
