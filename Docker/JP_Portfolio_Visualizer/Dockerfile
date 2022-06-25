#FROM centos:8


FROM node:14 
#node;14distr->debian

# 必要なパッケージがある場合インストール
# RUN apt install ~~~
#RUN yum install net-tools
# system update
#RUN yum -y update && yum clean all
#RUN yum install -y httpd
RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y nginx
#runtest

ARG project_dir=/home/node
WORKDIR $project_dir

#ファイル追加
COPY etcs ${project_dir}


#specify port
#EXPOSE 80

CMD ["/bin/bash"]