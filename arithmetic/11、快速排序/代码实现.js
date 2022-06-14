function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }

  return arr;
}

function partition(arr, left, right) {
  let pivot = left;
  let index = pivot + 1;
  for (let i = index; i <= right; i++) {
    if (arr[pivot] > arr[i]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(quickSort([3, 4, 1, 5, 8, 6, 7, 2, 9]));