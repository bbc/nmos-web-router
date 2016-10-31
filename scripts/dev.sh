[ -z `docker ps -aqf 'name=ips-web-dev-start'` ] || docker rm -f `docker ps -aqf 'name=ips-web-dev-start'`
docker run -d -p 3000:3000 --name ips-web-dev-start -v `pwd`/src:/usr/src/app/src ips-web npm run dev
