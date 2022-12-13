class MyPromise {
  // 构造器
  constructor(executor) {
    // 初始化state为等待态
    this.status = "pending";

    // 成功的值
    this.value = undefined;

    // 失败的原因
    this.reason = undefined;

    // 成功存放的数组
    this.onResolvedCallbacks = [];

    // 失败存放法的数组
    this.onRejectedCallbacks = [];

    // 成功
    let resolve = (value) => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.value = value;
        // 一旦resolve执行，调用成功数组的函数
        this.onResolvedCallbacks.forEach((fn) => fn());
      }
    };

    // 失败
    let reject = (reason) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.reason = reason;
        // 一旦reject执行，调用失败数组的函数
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };

    // 如果executor执行报错，直接执行reject
    try {
      // 立即执行
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  // then 方法 有两个参数onFulfilled onRejected
  then(onFulfilled, onRejected) {
    // onFulfilled如果不是函数，就忽略onFulfilled，直接返回value
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    // onRejected如果不是函数，就忽略onRejected，直接扔出错误
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (err) => {
            throw err;
          };

    // 声明返回的promise2
    let promise2 = new MyPromise((resolve, reject) => {
      // 状态为fulfilled，执行onFulfilled，传入成功的值
      if (this.status === "fulfilled") {
        // 异步
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            // resolvePromise函数，处理自己return的promise和默认的promise2的关系
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }

      // 状态为rejected，执行onRejected，传入失败的原因
      if (this.status === "rejected") {
        // 异步
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }

      // 当状态state为pending时, 发布订阅
      if (this.status === "pending") {
        // onFulfilled传入到成功数组
        this.onResolvedCallbacks.push(() => {
          // 异步
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });

        // onRejected传入到失败数组
        this.onRejectedCallbacks.push(() => {
          // 异步
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
      }
    });

    return promise2;
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  // 循环引用报错
  if (promise2 === x) {
    // reject报错
    return reject(new TypeError("Chaining cycle detected for promise"));
  }
  // 防止多次调用
  let called;
  // x不是null 且x是对象或者函数
  if (x !== null && (typeof x === "object" || typeof x === "function")) {
    try {
      let then = x.then;
      // 如果then是函数，就默认是promise了
      if (typeof then === "function") {
        then.call(
          x,
          (y) => {
            // 成功和失败只能调用一个 这里是否可以去掉？？？
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject);
          },
          (err) => {
            // 成功和失败只能调用一个
            if (called) return;
            called = true;
            reject(err);
          }
        );
      } else {
        resolve(x);
      }
    } catch (e) {
      // 也属于失败
      if (called) return;
      called = true;
      // 取then出错了那就不要在继续执行了
      reject(e);
    }
  } else {
    resolve(x);
  }
}

// all方法
MyPromise.all = function (promises) {
  let arr = [];
  let count = 0;
  return new MyPromise((resolve, reject) => {
    promises.forEach((item, i) => {
      Promise.resolve(item).then((res) => {
        arr[i] = res;
        count += 1;
        if (count === promises.length) resolve(arr);
      }, reject);
    });
  });
};

// MyPromise.all(([p0, p])).then((o, r) => {
//   console.log([o, r]);
// })

// let pp = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(100)
//   }, 1000)
// })

// let oo = pp.then((res) => {
//   return new Promise((r, f) => {
//     r(22222)
//   })
// }, e => {
//   console.log(e)
// })

// console.log(oo);

// p.then(res => {
//   console.log(res);
//   return res;
// }, err => {
//   console.log(err)
// }).then(res2 => {
//   console.log(res2);
// })

// p.then(null).then(res2 => {
//   console.log(res2);
// })

const p1 = Promise.resolve("p1");

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 延时一秒");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 延时两秒");
  }, 2000);
});

// const p4 = Promise.reject("p4 rejected");

// const p5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("p5 rejected 延时1.5秒");
//   }, 1500);
// });

// 所有Promise实例都成功
MyPromise.all([p1, p2, p3]).then((res) => {
  console.log(res);
});
// .catch((err) => console.log(err)); // 2秒后打印 [ 'p1', 'p2 延时一秒', 'p3 延时两秒' ]

MyPromise.defer = MyPromise.deferred = function () {
  let dfd = {};
  dfd.promise = new MyPromise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
};

module.exports = MyPromise;
