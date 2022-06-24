FROM node:14

# 必要なパッケージがある場合インストール
# RUN apt install ~~~
#RUN yum install net-tools

#ファイル追加
COPY ./d3.v4.min.js  /home/centos/
COPY ./index.html  /home/centos/

#specify port
EXPOSE 80