FROM node:alpine

WORKDIR /react-docker

COPY ./client/package.json /react-docker

RUN npm install

COPY ./client/ /react-docker

CMD ["npm", "run", "dev"]
