// 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。

//  

// 示例 1:

// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]
// 示例 2:

// 输入: nums = [1], k = 1
// 输出: [1]
//  

// 提示：

// 1 <= nums.length <= 105
// k 的取值范围是 [1, 数组中不相同的元素的个数]
// 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的
//  

// 进阶：你所设计算法的时间复杂度 必须 优于 O(n log n) ，其中 n 是数组大小。

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/top-k-frequent-elements
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  for (num of nums) {
    map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
  }
  const arr = [];
  let heapSize = 1;
  for (let [key, value] of map.entries()) {
    if (heapSize < k) {
      arr.push(key);
    } else if (heapSize === k) {
      arr.push(key);
      buildMinHeap(arr, map);
    } else {
      if (map.get(arr[0]) < value) {
        arr[0] = key;
        heapify(arr, 0, k, map);
      }
    }
    heapSize++;
  }
  return arr;
};

function buildMinHeap(arr, map) {
  const len = arr.length;
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, i, len, map);
  }
}

function heapify(arr, i, heapSize, map) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let least = i;
  if (left < heapSize && map.get(arr[left]) < map.get(arr[least])) {
    least = left;
  }
  if (right < heapSize && map.get(arr[right]) < map.get(arr[least])) {
    least = right;
  }
  if (least !== i) {
    swap(arr, least, i);
    heapify(arr, least, heapSize, map);
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3,3,3,3], 2));