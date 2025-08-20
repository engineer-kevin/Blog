class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class Observer {
  update(data) {
    console.log('Observer updated', data);
  }
}

// 快速排序
function quictSort(nums, i, j, k) {
  if (i < j) {
    const index = partition(nums, i, j);
    const targetIndex = nums.length - k;
    if (index === targetIndex) {
      return nums[index];
    } else if (index < targetIndex) {
      return quictSort(nums, index + 1, j, k);
    } else {
      return quictSort(nums, i, index - 1, k);
    }
  }
  return nums[i];
}

function partition(nums, i, j) {
  let start = i;
  let end = j;
  let pivot = nums[i];
  while (start < end) {
    while (start < end && nums[end] >= pivot) {
      end--;
    }

    while (start < end && nums[start] <= pivot) {
      start++;
    }

    if (start < end) {
      swap(nums, start, end);
    }
  }

  swap(nums, i, start);

  return start;
}

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
