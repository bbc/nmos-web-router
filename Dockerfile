FROM node:6

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app

#RUN npm config set proxy http://www-cache.rd.bbc.co.uk:8080
#RUN npm config set https-proxy http://www-cache.rd.bbc.co.uk:8080

RUN npm i -g yarn
RUN yarn install
RUN npm test
RUN npm run build

EXPOSE 7942 3000
