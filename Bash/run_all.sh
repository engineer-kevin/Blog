#!/bin/bash
echo "今天是 " `date`

echo -e "\n请输入目录路径"
read the_path

echo -e "\n 你的路径包含以下文件和文件夹："
ls $the_path


