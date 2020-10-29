FROM node:latest
WORKDIR /chatApp
ADD . .
RUN npm install
CMD npm start
