[ -z `docker ps -aqf 'name=ips-web-start'` ] || docker rm -f `docker ps -aqf 'name=ips-web-start'`
docker run -d -p 7942:7942 --name ips-web-start ips-web npm run serve
