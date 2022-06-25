FROM node:14

# 必要なパッケージがある場合インストール
# RUN apt install ~~~
#RUN yum install net-tools

ARG project_dir=/home/centos/react
WORKDIR $project_dir

#ファイル追加
#$koment
COPY . ${project_dir}

#specify port
EXPOSE 80