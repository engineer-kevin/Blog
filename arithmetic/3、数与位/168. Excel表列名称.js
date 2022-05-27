// 给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。

// 例如：

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...
//  

// 示例 1：

// 输入：columnNumber = 1
// 输出："A"
// 示例 2：

// 输入：columnNumber = 28
// 输出："AB"
// 示例 3：

// 输入：columnNumber = 701
// 输出："ZY"
// 示例 4：

// 输入：columnNumber = 2147483647
// 输出："FXSHRXW"
//  

// 提示：

// 1 <= columnNumber <= 231 - 1

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/excel-sheet-column-title
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number} columnNumber
 * @return {string}
 */
 var convertToTitle = function(columnNumber) {
   let res = []; 
   while (columnNumber > 0) {
    columnNumber--;
    console.log(columnNumber,columnNumber % 26);
    res.push(String.fromCharCode(columnNumber % 26 + 65))
    columnNumber = Math.floor(columnNumber / 26);
   }
   return res.reverse().join("")
};
console.log(convertToTitle(701));