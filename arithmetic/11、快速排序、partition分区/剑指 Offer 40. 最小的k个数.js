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
  return quickSelect(arr, 0, arr.length - 1, k);
};

function quickSelect(arr, left, right, k) {
  const partitionIndex = partition(arr, left, right);
  if (partitionIndex === k) {
    return arr.slice(0, partitionIndex);
  } else if (partitionIndex < k) {
    return quickSelect(arr, partitionIndex + 1, right, k);
  } else {
    return quickSelect(arr, left, partitionIndex - 1, k);
  }
}

function partition(arr, left, right) {
  let pivot = left;
  while (left < right) {
    while (left < right && arr[right] >= arr[pivot]) {
      right--;
    }
    while (left < right && arr[left] <= arr[pivot]) {
      left++;
    }
    if (left < right) {
      swap(arr, left, right);
    }
  }
  swap(arr, left, pivot);
  return left;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(getLeastNumbers([0,0,1,2,4,2,2,3,1,4], 8));
console.log(getLeastNumbers([3,2,5,1], 1));