FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

ARG PORT=3000

EXPOSE ${PORT}

CMD [ "yarn", "start" ]