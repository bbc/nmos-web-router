FROM node:6

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app

RUN yarn config set color false && yarn config set proxy http://www-cache.rd.bbc.co.uk:8080 && \
    yarn config set https-proxy http://www-cache.rd.bbc.co.uk:8080

RUN yarn install

EXPOSE 4000 3000 6589 6590 6591 12345
