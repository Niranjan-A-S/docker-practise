FROM node:18-alpine

ARG DEFAULT_PORT

WORKDIR /app

COPY /package.json .

RUN yarn install

ENV PORT ${DEFAULT_PORT}

EXPOSE $PORT

COPY . .

CMD ["node", "app.js"]