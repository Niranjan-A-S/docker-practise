FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

ARG DEFAULT_PORT

ENV PORT $DEFAULT_PORT 

EXPOSE $PORT

# VOLUME [ "/app/feedback" ]
# # The path inside the array is the path of the data inside the container that needs to be mapped. But this is anonymous volume. It won't survive the container shutdown

CMD [ "yarn", "start" ]