// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

//  

// 示例 1:

// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5
// 示例 2:

// 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// 输出: 4
//  

// 提示：

// 1 <= k <= nums.length <= 104
// -104 <= nums[i] <= 104

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/kth-largest-element-in-an-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const len = nums.length;
  let heapSize = len;
  buildMaxHeap(nums);
  for (let i = len - 1; i > len - k; i--) {
    swap(nums, 0, i);
    heapSize--;
    heapify(nums, 0, heapSize);
  }
  return nums[0];
};

function buildMaxHeap(arr) {
  const len = arr.length;
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, i, len);
  }
  return arr;
}

function heapify(arr, i, heapSise) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let largest = i;
  if (left < heapSise && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < heapSise && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== i) {
    swap(arr, i, largest);
    heapify(arr, largest, heapSise);
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));