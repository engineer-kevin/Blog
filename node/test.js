const path = require("node:path");
// console.log(path.basename("./info.js"), ".js");
// console.log(process.env.PATH.split(path.delimiter));
// console.log(
//   path.dirname("'C:\\Users\\003967\\AppData\\Local\\Microsoft\\WindowsApps'")
// );
// console.log(path.extname("./lesson3/app.js"));
// console.log(
//   path.format({
//     root: "/",
//     name: "file",
//     ext: ".txt",
//   })
// );
// console.log(path.join("/foo", "bar", "baz/asdf", "quux", ".."));
// console.log(path.join("/foo", "bar", "baz/asdf", "quux"));
// console.log(path.parse("/home/user/dir/file.txt"));
// console.log(path.resolve()); // 当前绝对路径
// console.log(__dirname);
// console.log(__filename);

// spawn
// const spawn = require("child_process").spawn;
// const ls = spawn("ls", ["-lh", "/usr"]);

// ls.stdout.on("data", (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on("data", (data) => {
//   console.log(`stderr: ${data}`);
// });

// ls.on("close", (code) => {
//   console.log(`child process exited with code ${code}`);
// });

var exec = require("child_process").exec;

// 成功的例子
exec("ls -al", function (error, stdout, stderr) {
  if (error) {
    console.error("error: " + error);
    return;
  }
  console.log("stdout: " + stdout);
  console.log("stderr: " + typeof stderr);
});

// 失败的例子
exec("ls hello.txt", function (error, stdout, stderr) {
  if (error) {
    console.error("error: " + error);
    return;
  }
  console.log("stdout: " + stdout);
  console.log("stderr: " + stderr);
});
