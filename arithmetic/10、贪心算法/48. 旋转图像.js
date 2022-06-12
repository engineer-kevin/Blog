// 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。

// 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

//  

// 示例 1：


// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[[7,4,1],[8,5,2],[9,6,3]]
// 示例 2：


// 输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// 输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
//  

// 提示：

// n == matrix.length == matrix[i].length
// 1 <= n <= 20
// -1000 <= matrix[i][j] <= 1000

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/rotate-image
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  // const row = matrix.length;
  // for (let i = 0; i < row / 2; i++) { // 先上下交换
  //   let temp = matrix[i];
  //   matrix[i] = matrix[row - i - 1];
  //   matrix[row - i - 1] = temp;
  // }

  // for (let i = 0; i < row - 1; i++) { // 在按照对角线交换
  //   for (let j = i + 1; j < row; j++) {
  //     let temp = matrix[i][j];
  //     matrix[i][j] = matrix[j][i];
  //     matrix[j][i] = temp;
  //   }
  // }

  // return matrix;

  const len = matrix.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    for (let j = i; j < len - i - 1; j++) {
      const n = len - i - 1;
      const m = len - j - 1;
      const temp = matrix[i][j];
      matrix[i][j] = matrix[m][i];
      matrix[m][i] = matrix[n][m];
      matrix[n][m] = matrix[j][n];
      matrix[j][n] = temp;
    }
  }
  return matrix;
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))