#!/bin/sh

# vap=`ls -l |grep "^-"|wc -l`
# echo ${vap}

# cp index.html index2.html

# rm index1.html index2.html

# 修改文件名
# mv index.html indexmv.html 

# 输出内容到文件夹
tem=`node timer.js`
echo ${tem} > out.txt
