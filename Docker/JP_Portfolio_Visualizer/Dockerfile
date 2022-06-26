FROM node:14 
RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y nginx
RUN apt-get install -y vi
#runtest

ARG project_dir=/home/node
WORKDIR $project_dir

#ファイル追加
COPY etcs ${project_dir}
#q

#specify port
#EXPOSE 80

CMD ["/bin/bash"]
