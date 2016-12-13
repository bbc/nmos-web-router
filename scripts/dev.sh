[ -z `docker ps -aqf 'name=ips-web-dev'` ] || docker rm -f `docker ps -aqf 'name=ips-web-dev'`
docker run -d -p 3000:3000 -p 12345:12345 -p 6589:6589 -p 6590:6590 -p 6591:6591 --name ips-web-dev -v `pwd`/src:/usr/src/app/src ips-web npm start
docker exec -dit `docker ps -aqf 'name=ips-web-dev'` npm run mdnsbridge
docker exec -dit `docker ps -aqf 'name=ips-web-dev'` npm run nmos
