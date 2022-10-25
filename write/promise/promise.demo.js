let p = new Promise((resolse, reject) => {
  setTimeout(() => {
    resolse('哈哈');
  }, 2000);
})

p.then((res) => {
  console.log(res);
  return Promise.resolve(res);
}, err => {
  console.log(err + '2')
}).then(res => {
  console.log(res + '0000')
})

p.then((res) => {
  console.log(res + '3333');
  return res;
},err => {
  console.log(err + '4444')
})