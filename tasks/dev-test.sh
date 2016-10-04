[ -z `docker ps -aqf 'name=ips-web-dev-test'` ] || docker rm -f `docker ps -aqf 'name=ips-web-dev-test'`
docker run -t -d --name ips-web-dev-test -v `pwd`/src:/usr/src/app/src -v `pwd`/__tests__:/usr/src/app/__tests__ ips-web npm run dev-test
