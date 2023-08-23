### 这里要注意开头的 #!/usr/bin/env node 这个语句必须加上，主要是为了让系统看到这一行的时候，会沿着该路径去查找 node 并执行，主要是为了兼容 Mac ，确保可执行。

## bin 目录初始化

当前，bin 目录下就只有一个文件，就是入口文件 xr。所以现在我们先来编写这个文件，由于内容较少，我们直接看代码：

```js
#!/usr/bin/env node
const program = require("commander");

// 定义当前版本
// 定义使用方法
// 定义四个指令
program
  .version(require("../package").version)
  .usage("<command> [options]")
  .command("add", "add a new template")
  .command("delete", "delete a template")
  .command("list", "list all the templates")
  .command("init", "generate a new project from a template");

// 解析命令行参数
program.parse(process.argv);
```

执行 `node ./bin/xr`

当然，你可能会觉得每次输入 node ./bin/xr 这个命令有点麻烦，没关系，我们可以在 package.json 里面写入已下内容：

// bin 用来指定每个命令所对应的可执行文件的位置
```
"bin": {
    "xr": "bin/xr"
}
``