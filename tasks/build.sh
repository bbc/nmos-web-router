rm -rf build
docker build -t ips-web .
[ -z `docker ps -aqf 'name=ips-web-copy'` ] || docker rm -f `docker ps -aqf 'name=ips-web-copy'`
docker run -d --name ips-web-copy ips-web /bin/sh -c "while true; do echo hello world; sleep 1; done"
docker cp `docker ps -aqf 'name=ips-web-copy'`:/usr/src/app/build .
[ -z `docker ps -aqf 'name=ips-web-copy'` ] || docker rm -f `docker ps -aqf 'name=ips-web-copy'`
