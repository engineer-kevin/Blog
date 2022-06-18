// 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

//  

// 示例 1：

// 输入：arr = [3,2,1], k = 2
// 输出：[1,2] 或者 [2,1]
// 示例 2：

// 输入：arr = [0,1,2,1], k = 1
// 输出：[0]
//  

// 限制：

// 0 <= k <= arr.length <= 10000
// 0 <= arr[i] <= 10000

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/zui-xiao-de-kge-shu-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  let result = [];
  const len = arr.length;
  buildMinHeap(arr);
  for (let i = len - 1; i >= len - k; i--) {
    result.push(arr[0])
    swap(arr, 0, i);
    heapify(arr, 0, i);
  }
  return result;
};

function buildMinHeap(arr) {
  const len = arr.length;
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, i, len);
  }
}

function heapify(arr, i, heapSize) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let least = i;
  if (left < heapSize && arr[left] < arr[least]) {
    least = left;
  }

  if (right < heapSize && arr[right] < arr[least]) {
    least = right;
  }

  if (least !== i) {
    swap(arr, i, least);
    heapify(arr, least, heapSize);
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
console.log(getLeastNumbers([3,2,1], 2));