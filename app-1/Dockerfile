FROM node:22-alpine

WORKDIR /app-1

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 3001

CMD ["node", "index.js"]