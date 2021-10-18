FROM node:current-alpine3.14

WORKDIR /app
EXPOSE 8080/tcp
EXPOSE 8765/udp
VOLUME /app/radata

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD [ "node", "main.js" ]
