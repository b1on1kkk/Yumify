FROM node:18-alpine

WORKDIR /usr/src/app

COPY ../../server/package.json ../../server/package-lock.json /usr/src/app/

RUN npm install
RUN npm install -g prisma

COPY ../../server/ /usr/src/app/

COPY ../../server/start.sh /usr/src/app/

RUN chmod +x /usr/src/app/start.sh

CMD ["/usr/src/app/start.sh"]

