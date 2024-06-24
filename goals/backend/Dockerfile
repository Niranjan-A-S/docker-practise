FROM node:18-alpine

WORKDIR /app

COPY /package.json .

RUN yarn install

ENV PORT 8000

EXPOSE 8000

COPY . .

CMD ["yarn", "start"]