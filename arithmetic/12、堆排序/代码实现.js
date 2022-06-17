function buildMaxHeap(arr) {
  const len = arr.length;
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, i, len);
  }
  return arr;
}

function heapify(arr, i, heapSize) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let largest = i;
  if (left < heapSize && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < heapSize && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== i) {
    swap(arr, i, largest);
    heapify(arr, largest, heapSize);
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function heapSort(arr) {
  let heapSize = arr.length;
  buildMaxHeap(arr);
  for (let i = heapSize - 1; i > 0; i--) {
    swap(arr, 0, i);
    heapSize--;
    heapify(arr, 0, heapSize);
  }
  return arr;
}

console.log(heapSort([4, 6, 8, 5, 9, 1, 2, 5, 3, 2]));
console.log(heapSort([9, 5, 7, 3, 4, 6, 2, 1]));