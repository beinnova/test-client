FROM node:7.9.0-alpine
MAINTAINER Giorgio Cerruti

RUN mkdir /app
WORKDIR /app

COPY ./package.json .
COPY ./server.js .

RUN npm install

EXPOSE 9000

CMD ["npm", "start"]
