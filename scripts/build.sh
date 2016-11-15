rm -rf build
mkdir build
docker build -t ips-web .
[ -z `docker ps -aqf 'name=ips-web-build'` ] || docker rm -f `docker ps -aqf 'name=ips-web-build'`
docker run --name ips-web-build -v `pwd`/build:/usr/src/app/build ips-web npm run build
