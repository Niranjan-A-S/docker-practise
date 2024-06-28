FROM node:18-alpine

ARG PORT=8000

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

ENV PORT=${PORT}

EXPOSE ${PORT}

CMD [ "node", "index.js" ]