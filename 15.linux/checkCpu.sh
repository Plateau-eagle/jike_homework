#!/bin/sh
pm2 kill
pm2 start ./bin/www
sleep 2s
while [ true ]
do
  pid=`ps -ef|grep -v grep|grep 'node'|awk '{print $2}'`
  if [ ! $pid ]
  then
    echo "node.js not found!"
    break
  fi
  cpuNum=`ps -p $pid -o pcpu|grep -v CPU|cut -d . -f 1|awk '{print $1}'`
  echo "CPU is $cpuNum"
  if [[ $cpuNum -gt 90 ]];
  then
    echo "The usage of system cpu is larer than 90%,node server will restart"
    pm2 restart all
  else 
    echo "---------运行正常，10s后重新检测-------"
  fi 
  sleep 10s
done
