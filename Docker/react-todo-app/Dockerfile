FROM node:14
RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y nginx
RUN apt-get install -y vim
#runtest

#ファイル追加
COPY . /var/www/html/


#specify port
#EXPOSE 80

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
