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
  return quickSelect(nums, 0, nums.length - 1, nums.length - k);
};

function quickSelect(arr, left, right, k) {
  const random = Math.floor(left + Math.random() * (right - left + 1));
  swap(arr, left, random);
  const partitionIndex = partition(arr, left, right);
  if (partitionIndex === k) {
    return arr[k];
  } else if (partitionIndex < k) {
    return quickSelect(arr, partitionIndex + 1, right, k);
  } else {
    return quickSelect(arr, left, partitionIndex - 1, k);
  }
}

function partition(arr, left, right) {
  let piovt = left;
  let index = piovt + 1;
  for (let i = index; i <= right; i++) {
    if (arr[piovt] > arr[i]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, piovt, index - 1);
  return index - 1;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));