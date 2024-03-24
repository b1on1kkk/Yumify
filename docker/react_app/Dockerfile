FROM node:alpine

WORKDIR /react-docker

COPY ../../client/package*.json /react-docker

RUN rm -rf node_modules package-lock.json

RUN npm install

COPY ../../client /react-docker

CMD ["npm", "run", "dev"]
